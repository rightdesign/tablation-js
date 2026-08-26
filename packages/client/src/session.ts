import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

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

/**
 * Only macOS ships a session store today — Linux (`secret-tool`) and
 * Windows (`cmdkey`) are their own follow-up ticket. Fail with a clear
 * message naming the `TABLATION_API_KEY` fallback rather than let a missing
 * `security` binary surface as a raw shell error.
 */
export function getSessionStore(): SessionStore {
  if (process.platform === 'darwin') return new DarwinKeychainSessionStore();
  throw new Error(
    `No session store is implemented for this platform (${process.platform}) yet. ` +
      'Set TABLATION_API_KEY instead of running `login`.',
  );
}

/** Host, not a fixed domain — a local dev instance and beta get separate keychain entries. */
export function hostFromUrl(baseUrl: string): string {
  return new URL(baseUrl).host;
}
