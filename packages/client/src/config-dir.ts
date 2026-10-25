import { mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const CONFIG_DIR = join(homedir(), '.config', 'tablation');
const CONFIG_FILE = join(CONFIG_DIR, 'config.json');
/** Earlier releases wrote this name (and a now-dropped `shipId`); only `lastLogin` is carried over. */
const LEGACY_CONFIG_FILE = join(CONFIG_DIR, 'ship.json');

interface CliConfig {
  lastLogin?: { host: string; workspaceSlug: string };
}

function readFile(path: string): CliConfig | undefined {
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as CliConfig;
  } catch {
    return undefined;
  }
}

/** Reads `config.json`, falling back to the legacy `ship.json` so existing logins keep their default workspace. */
function readConfig(): CliConfig | undefined {
  const current = readFile(CONFIG_FILE);
  if (current) return current;
  const legacy = readFile(LEGACY_CONFIG_FILE);
  return legacy?.lastLogin ? { lastLogin: legacy.lastLogin } : undefined;
}

function writeConfig(config: CliConfig): void {
  mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2) + '\n');
  // Migrated: the legacy file is now redundant.
  try {
    unlinkSync(LEGACY_CONFIG_FILE);
  } catch {
    // absent, or not ours to remove — harmless either way
  }
}

/** Which host/workspace a bare command with no `--workspace` should resolve the session for. */
export function getLastLogin():
  { host: string; workspaceSlug: string } | undefined {
  return readConfig()?.lastLogin;
}

export function setLastLogin(host: string, workspaceSlug: string): void {
  const config = readConfig() ?? {};
  writeConfig({ ...config, lastLogin: { host, workspaceSlug } });
}

export function clearLastLogin(): void {
  const config = readConfig();
  if (!config?.lastLogin) return;
  writeConfig({});
}
