import { parseArgs } from "node:util";
import {
  clearLastLogin,
  getLastLogin,
  getSessionStore,
  hostFromUrl,
} from "@tablation/client";
import { CliError, resolveBaseUrl } from "../context";

const HELP = `Usage: tablation logout [options]

Removes the stored session for this server.

Options:
  --workspace <slug>   Workspace to log out of (default: the last one logged in)
  --url <base>         Server base URL (default $TABLATION_URL or https://tablation.com)
  -h, --help           Show this help
`;

export async function logoutCommand(argv: string[]): Promise<void> {
  const { values } = parseArgs({
    args: argv,
    options: {
      workspace: { type: "string" },
      url: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help) {
    console.log(HELP);
    return;
  }

  const baseUrl = resolveBaseUrl(values.url);
  const host = hostFromUrl(baseUrl);
  const last = getLastLogin();
  const workspaceSlug =
    values.workspace ?? (last?.host === host ? last.workspaceSlug : undefined);
  if (!workspaceSlug) {
    throw new CliError(
      "No stored session to log out of — pass --workspace <slug>.",
    );
  }

  const store = getSessionStore();
  await store.clear(host, workspaceSlug);
  if (last?.host === host && last.workspaceSlug === workspaceSlug) {
    clearLastLogin();
  }
  console.log(`Logged out of ${host}/${workspaceSlug}.`);
}
