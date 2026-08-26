import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

/** `execFile` has no async `input` option (only `execFileSync` does) — write to stdin by hand. */
function execFileWithInput(
  file: string,
  args: string[],
  input: string,
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const child = execFile(file, args, (err, stdout, stderr) => {
      if (err) {
        (err as NodeJS.ErrnoException & { stderr?: string }).stderr = stderr;
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
    child.stdin?.end(input);
  });
}

const KEYCHAIN_SERVICE = 'com.tablation.cli';

export interface StoredSession {
  apiKey: string;
  shipId: string;
  workspaceId: string;
  identityId: string;
  createdAt: string;
}

export interface SessionStore {
  get(host: string, workspaceSlug: string): Promise<StoredSession | undefined>;
  set(
    host: string,
    workspaceSlug: string,
    session: StoredSession,
  ): Promise<void>;
  clear(host: string, workspaceSlug: string): Promise<void>;
}

/** `<host>/<workspaceSlug>`, not a fixed domain, so a local dev instance and beta coexist as separate entries. */
function account(host: string, workspaceSlug: string): string {
  return `${host}/${workspaceSlug}`;
}

/** security exits 44 (SecKeychainSearchCopyNext) when the item isn't there. */
function isNotFoundError(err: unknown): boolean {
  return (
    typeof err === 'object' && err !== null && 'code' in err && err.code === 44
  );
}

class DarwinKeychainSessionStore implements SessionStore {
  async get(
    host: string,
    workspaceSlug: string,
  ): Promise<StoredSession | undefined> {
    try {
      const { stdout } = await execFileAsync('security', [
        'find-generic-password',
        '-s',
        KEYCHAIN_SERVICE,
        '-a',
        account(host, workspaceSlug),
        '-w',
      ]);
      return JSON.parse(stdout.trim()) as StoredSession;
    } catch (err) {
      if (isNotFoundError(err)) return undefined;
      throw err;
    }
  }

  async set(
    host: string,
    workspaceSlug: string,
    session: StoredSession,
  ): Promise<void> {
    // -U makes a re-login idempotent (update in place) instead of erroring
    // on a duplicate account.
    await execFileAsync('security', [
      'add-generic-password',
      '-U',
      '-s',
      KEYCHAIN_SERVICE,
      '-a',
      account(host, workspaceSlug),
      '-w',
      JSON.stringify(session),
    ]);
  }

  async clear(host: string, workspaceSlug: string): Promise<void> {
    try {
      await execFileAsync('security', [
        'delete-generic-password',
        '-s',
        KEYCHAIN_SERVICE,
        '-a',
        account(host, workspaceSlug),
      ]);
    } catch (err) {
      if (!isNotFoundError(err)) throw err;
    }
  }
}

/** Message shared by every platform's headless/unavailable-backend fallback. */
const FALLBACK_HINT = 'Set TABLATION_API_KEY instead of running `login`.';

/**
 * `secret-tool store`/`lookup`/`clear` (libsecret) exit non-zero both when
 * the item genuinely isn't there and when there's no Secret Service to ask
 * at all (no D-Bus session, no keyring daemon — normal on a headless
 * server). Only the second case should surface as an error; the first is
 * this store's ordinary "not logged in" result.
 */
function isHeadlessSecretServiceError(stderr: string): boolean {
  return /(cannot autolaunch|d-?bus|secret service|keyring)/i.test(stderr);
}

class LinuxSecretToolSessionStore implements SessionStore {
  async get(
    host: string,
    workspaceSlug: string,
  ): Promise<StoredSession | undefined> {
    try {
      const { stdout } = await execFileAsync('secret-tool', [
        'lookup',
        'service',
        KEYCHAIN_SERVICE,
        'account',
        account(host, workspaceSlug),
      ]);
      const value = stdout.trim();
      return value ? (JSON.parse(value) as StoredSession) : undefined;
    } catch (err) {
      const stderr = (err as { stderr?: string }).stderr ?? '';
      if (isHeadlessSecretServiceError(stderr)) {
        throw new Error(`No Secret Service is available (libsecret). ${FALLBACK_HINT}`);
      }
      return undefined;
    }
  }

  async set(
    host: string,
    workspaceSlug: string,
    session: StoredSession,
  ): Promise<void> {
    try {
      await execFileWithInput(
        'secret-tool',
        [
          'store',
          '--label',
          `Tablation CLI (${account(host, workspaceSlug)})`,
          'service',
          KEYCHAIN_SERVICE,
          'account',
          account(host, workspaceSlug),
        ],
        JSON.stringify(session),
      );
    } catch (err) {
      const stderr = (err as { stderr?: string }).stderr ?? '';
      if (isHeadlessSecretServiceError(stderr)) {
        throw new Error(`No Secret Service is available (libsecret). ${FALLBACK_HINT}`);
      }
      throw err;
    }
  }

  async clear(host: string, workspaceSlug: string): Promise<void> {
    try {
      await execFileAsync('secret-tool', [
        'clear',
        'service',
        KEYCHAIN_SERVICE,
        'account',
        account(host, workspaceSlug),
      ]);
    } catch (err) {
      const stderr = (err as { stderr?: string }).stderr ?? '';
      if (isHeadlessSecretServiceError(stderr)) {
        throw new Error(`No Secret Service is available (libsecret). ${FALLBACK_HINT}`);
      }
      // secret-tool clear exits non-zero when there's nothing to clear too.
    }
  }
}

/**
 * `cmdkey /pass:` truncates silently past roughly a hundred characters —
 * an old console input-buffer limit, not a Credential Manager one — so a
 * session (well over that once JSON-encoded) has to be split across
 * several generic credentials and reassembled on read. `cmdkey` itself
 * can't read a password back (it's SSO-only, by design), so `get` shells
 * out to `powershell.exe` — present on every Windows install — to call
 * `CredRead` via inline P/Invoke. That keeps this shelling out to
 * platform-bundled executables rather than linking a native module,
 * matching the macOS/Linux backends.
 */
const WINDOWS_CHUNK_SIZE = 100;
const WINDOWS_MAX_CHUNKS = 64;

function windowsTarget(host: string, workspaceSlug: string, index: number): string {
  return `${KEYCHAIN_SERVICE}:${account(host, workspaceSlug)}#${index}`;
}

const CRED_READ_PS_SCRIPT = `
param([string]$Target)
Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public class TablationCred {
  [DllImport("advapi32.dll", SetLastError=true, CharSet=CharSet.Unicode)]
  public static extern bool CredRead(string target, int type, int flags, out IntPtr credentialPtr);
  [DllImport("advapi32.dll", SetLastError=true)]
  public static extern bool CredFree(IntPtr cred);
  [StructLayout(LayoutKind.Sequential, CharSet=CharSet.Unicode)]
  public struct CREDENTIAL {
    public int Flags;
    public int Type;
    public IntPtr TargetName;
    public IntPtr Comment;
    public long LastWritten;
    public int CredentialBlobSize;
    public IntPtr CredentialBlob;
    public int Persist;
    public int AttributeCount;
    public IntPtr Attributes;
    public IntPtr TargetAlias;
    public IntPtr UserName;
  }
}
"@
$ptr = [IntPtr]::Zero
$ok = [TablationCred]::CredRead($Target, 1, 0, [ref]$ptr)
if (-not $ok) {
  $code = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error()
  if ($code -eq 1168) { Write-Output "NOTFOUND"; exit 0 }
  Write-Output "ERROR:$code"; exit 0
}
$cred = [System.Runtime.InteropServices.Marshal]::PtrToStructure($ptr, [type][TablationCred+CREDENTIAL])
$bytes = New-Object byte[] $cred.CredentialBlobSize
[System.Runtime.InteropServices.Marshal]::Copy($cred.CredentialBlob, $bytes, 0, $cred.CredentialBlobSize)
[TablationCred]::CredFree($ptr) | Out-Null
Write-Output ("OK:" + [System.Convert]::ToBase64String($bytes))
`;

/** Reads one chunk via `CredRead`; `undefined` means "no credential at this index". */
async function windowsCredRead(target: string): Promise<string | undefined> {
  let stdout: string;
  try {
    ({ stdout } = await execFileAsync('powershell.exe', [
      '-NoProfile',
      '-NonInteractive',
      '-Command',
      CRED_READ_PS_SCRIPT,
      '-Target',
      target,
    ]));
  } catch (err) {
    throw new Error(`Windows Credential Manager is unavailable. ${FALLBACK_HINT}`, {
      cause: err,
    });
  }
  const line = stdout.trim();
  if (line === 'NOTFOUND') return undefined;
  if (line.startsWith('ERROR:')) {
    throw new Error(
      `Windows Credential Manager returned an error (${line.slice(6)}). ${FALLBACK_HINT}`,
    );
  }
  if (!line.startsWith('OK:')) {
    throw new Error(`Unexpected Credential Manager response. ${FALLBACK_HINT}`);
  }
  const bytes = Buffer.from(line.slice(3), 'base64');
  // CredWrite stores the blob as UTF-16LE, generally without a trailing NUL,
  // but `cmdkey` has been observed to pad one on — strip it either way.
  return bytes.toString('utf16le').replace(/\0+$/, '');
}

function isCmdkeyNotFoundError(stderr: string): boolean {
  return /cannot find|could not be found|not found|does not exist/i.test(stderr);
}

class WindowsCredentialManagerSessionStore implements SessionStore {
  async get(
    host: string,
    workspaceSlug: string,
  ): Promise<StoredSession | undefined> {
    const chunks: string[] = [];
    for (let i = 0; i < WINDOWS_MAX_CHUNKS; i++) {
      const chunk = await windowsCredRead(windowsTarget(host, workspaceSlug, i));
      if (chunk === undefined) break;
      chunks.push(chunk);
    }
    if (chunks.length === 0) return undefined;
    return JSON.parse(chunks.join('')) as StoredSession;
  }

  async set(
    host: string,
    workspaceSlug: string,
    session: StoredSession,
  ): Promise<void> {
    // Best-effort: on a machine where nothing has ever been stored, cmdkey's
    // "nothing to delete" error text is locale-dependent, so isCmdkeyNotFoundError
    // can't be trusted to recognize it in every locale. Swallowing any clear()
    // failure here is safe — a stale leftover chunk from a previous crash is a
    // far smaller problem than a fresh `crew login` never succeeding, and a
    // genuine Credential Manager failure still surfaces below when the write
    // itself fails.
    await this.clear(host, workspaceSlug).catch(() => {});
    const payload = JSON.stringify(session);
    const chunks: string[] = [];
    for (let i = 0; i < payload.length; i += WINDOWS_CHUNK_SIZE) {
      chunks.push(payload.slice(i, i + WINDOWS_CHUNK_SIZE));
    }
    for (const [i, chunk] of chunks.entries()) {
      try {
        await execFileAsync('cmdkey', [
          `/generic:${windowsTarget(host, workspaceSlug, i)}`,
          `/user:${account(host, workspaceSlug)}`,
          `/pass:${chunk}`,
        ]);
      } catch (err) {
        throw new Error(`Failed to write to Windows Credential Manager. ${FALLBACK_HINT}`, {
          cause: err,
        });
      }
    }
  }

  async clear(host: string, workspaceSlug: string): Promise<void> {
    for (let i = 0; i < WINDOWS_MAX_CHUNKS; i++) {
      try {
        await execFileAsync('cmdkey', [`/delete:${windowsTarget(host, workspaceSlug, i)}`]);
      } catch (err) {
        const stderr = (err as { stderr?: string }).stderr ?? '';
        if (isCmdkeyNotFoundError(stderr)) break;
        throw new Error(`Failed to clear Windows Credential Manager entry. ${FALLBACK_HINT}`, {
          cause: err,
        });
      }
    }
  }
}

/**
 * Fail with a clear message naming the `TABLATION_API_KEY` fallback rather
 * than let a missing platform binary (or an unsupported OS) surface as a
 * raw shell error.
 */
export function getSessionStore(): SessionStore {
  if (process.platform === 'darwin') return new DarwinKeychainSessionStore();
  if (process.platform === 'linux') return new LinuxSecretToolSessionStore();
  if (process.platform === 'win32') return new WindowsCredentialManagerSessionStore();
  throw new Error(
    `No session store is implemented for this platform (${process.platform}) yet. ${FALLBACK_HINT}`,
  );
}

/** Host, not a fixed domain — a local dev instance and beta get separate keychain entries. */
export function hostFromUrl(baseUrl: string): string {
  return new URL(baseUrl).host;
}
