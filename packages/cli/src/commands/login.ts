import { hostname } from "node:os";
import { parseArgs } from "node:util";
import {
  DeviceLoginError,
  getOrCreateShipId,
  getSessionStore,
  hostFromUrl,
  loginWithDeviceCode,
  setLastLogin,
  type DeviceAuthorizeResponse,
} from "@tablation/client";
import { openBrowser } from "../browser";
import { CliError, resolveBaseUrl } from "../context";

const HELP = `Usage: tablation login [options]

Logs in via a device code: prints a short code and a URL, opens the browser,
and waits for approval. On success, stores the resulting workspace API key
in the OS keychain (macOS only today — set TABLATION_API_KEY instead on
other platforms).

Options:
  --url <base>    Server base URL (default $TABLATION_URL or https://tablation.com)
  --workspace <slug>
                  Workspace to preselect on the approval page
  -h, --help      Show this help
`;

function printCode(info: DeviceAuthorizeResponse): void {
  console.log(`First, visit: ${info.verificationUri}`);
  console.log(`Then enter code: ${info.userCode}`);
  console.log(`(or open ${info.verificationUriComplete} directly)\n`);
  console.log("Waiting for approval...");
  openBrowser(info.verificationUriComplete);
}

export async function loginCommand(argv: string[]): Promise<void> {
  const { values } = parseArgs({
    args: argv,
    options: {
      url: { type: "string" },
      workspace: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help) {
    console.log(HELP);
    return;
  }

  const baseUrl = resolveBaseUrl(values.url);
  const store = getSessionStore(); // throws a clear error on unsupported platforms
  const shipId = getOrCreateShipId();

  let result;
  try {
    result = await loginWithDeviceCode(baseUrl, {
      deviceName: `CLI on ${hostname()}`,
      workspaceSlug: values.workspace,
      onCode: printCode,
    });
  } catch (err) {
    if (err instanceof DeviceLoginError) throw new CliError(err.message);
    throw err;
  }

  const host = hostFromUrl(baseUrl);
  await store.set(host, result.workspace.slug, {
    apiKey: result.apiKey.key,
    shipId,
    workspaceId: result.workspace.id,
    identityId: result.identity.id,
    createdAt: result.apiKey.createdAt,
  });
  setLastLogin(host, result.workspace.slug);

  console.log(
    `Logged in to ${result.workspace.name} (${result.workspace.slug}) as ${result.identity.email}.`,
  );
}
