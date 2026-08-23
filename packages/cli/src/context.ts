import { TablationClient, type Workspace } from "@tablation/client";

export class CliError extends Error {}

/**
 * Shared connection/workspace resolution for every command. The base URL
 * accepts what a user would naturally type (`https://tablation.com`,
 * `http://localhost:3000`) and appends `/api` itself; the API key is the
 * same workspace bearer credential the MCP server uses (Admin > API keys).
 */
export interface CliContext {
  client: TablationClient;
  baseUrl: string;
}

export function buildContext(opts: { url?: string; key?: string }): CliContext {
  const rawUrl =
    opts.url ?? process.env.TABLATION_URL ?? "https://tablation.com";
  const key = opts.key ?? process.env.TABLATION_API_KEY;
  if (!key) {
    throw new CliError(
      "No API key. Pass --key or set TABLATION_API_KEY (create one under Admin > API keys in your workspace).",
    );
  }
  const baseUrl = rawUrl.replace(/\/+$/, "").replace(/\/api$/, "") + "/api";
  return { client: new TablationClient({ baseUrl, apiKey: key }), baseUrl };
}

/**
 * `--workspace` accepts an id or slug. Omitted: if the key can see exactly
 * one workspace, that's unambiguous — use it; otherwise list the choices
 * and make the user pick (never guess between workspaces).
 */
export async function resolveWorkspace(
  ctx: CliContext,
  workspaceArg: string | undefined,
): Promise<Workspace> {
  const workspaces = await ctx.client.workspaces.list();
  if (workspaceArg) {
    const match = workspaces.find(
      (w) => w.id === workspaceArg || w.slug === workspaceArg,
    );
    if (!match) {
      throw new CliError(
        `No workspace "${workspaceArg}" visible to this API key. Available: ${
          workspaces.map((w) => w.slug).join(", ") || "(none)"
        }`,
      );
    }
    return match;
  }
  if (workspaces.length === 1) return workspaces[0];
  throw new CliError(
    workspaces.length === 0
      ? "This API key has no visible workspaces."
      : `Multiple workspaces visible — pass --workspace <slug>. Available: ${workspaces
          .map((w) => w.slug)
          .join(", ")}`,
  );
}
