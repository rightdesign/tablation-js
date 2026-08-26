import { randomUUID } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';

const CONFIG_DIR = join(homedir(), '.config', 'tablation');
const CONFIG_FILE = join(CONFIG_DIR, 'ship.json');

interface ShipConfig {
  shipId: string;
  lastLogin?: { host: string; workspaceSlug: string };
}

function readConfig(): ShipConfig | undefined {
  try {
    return JSON.parse(readFileSync(CONFIG_FILE, 'utf8')) as ShipConfig;
  } catch {
    return undefined;
  }
}

function writeConfig(config: ShipConfig): void {
  mkdirSync(CONFIG_DIR, { recursive: true });
  writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2) + '\n');
}

/**
 * A stable per-machine id, generated once and mirrored here (non-secret)
 * rather than kept only in the keychain — so it survives a keychain wipe
 * and is readable without an unlock prompt. Not a server-tracked value:
 * the device-code API knows nothing about it.
 */
export function getOrCreateShipId(): string {
  const existing = readConfig();
  if (existing?.shipId) return existing.shipId;
  const shipId = `shp_${randomUUID().replace(/-/g, '')}`;
  writeConfig({ ...existing, shipId });
  return shipId;
}

/** Which host/workspace a bare command with no `--workspace` should resolve the session for. */
export function getLastLogin():
  { host: string; workspaceSlug: string } | undefined {
  return readConfig()?.lastLogin;
}

export function setLastLogin(host: string, workspaceSlug: string): void {
  const config = readConfig() ?? { shipId: getOrCreateShipId() };
  writeConfig({ ...config, lastLogin: { host, workspaceSlug } });
}

export function clearLastLogin(): void {
  const config = readConfig();
  if (!config?.lastLogin) return;
  writeConfig({ shipId: config.shipId });
}
