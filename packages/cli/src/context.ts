import {
  TablationClient,
  getLastLogin,
  hostFromUrl,
  type LibraryTemplate,
  type Workspace,
} from "@tablation/client";

export class CliError extends Error {}

/**
 * Shared connection/workspace resolution for every command. The base URL
 * accepts what a user would naturally type (`https://tablation.com`,
 * `http://localhost:3000`) and appends `/api` itself; the API key is the
 * same workspace bearer credential the MCP server uses (Admin > API keys),
 * or the one `tablation login` stashed in the OS keychain.
 */
export interface CliContext {
  client: TablationClient;
  baseUrl: string;
}

export function resolveBaseUrl(url?: string): string {
  const rawUrl = url ?? process.env.TABLATION_URL ?? "https://tablation.com";
  return rawUrl.replace(/\/+$/, "").replace(/\/api$/, "") + "/api";
}

export async function buildContext(opts: {
  url?: string;
  key?: string;
  workspace?: string;
}): Promise<CliContext> {
  const baseUrl = resolveBaseUrl(opts.url);
  // TABLATION_API_KEY always wins over a stored session — everything today
  // works that way, and none of it may break.
  const key = opts.key ?? process.env.TABLATION_API_KEY;
  if (key) {
    return { client: new TablationClient({ baseUrl, apiKey: key }), baseUrl };
  }

  const host = hostFromUrl(baseUrl);
  const last = getLastLogin();
  const workspaceSlug =
    opts.workspace ?? (last?.host === host ? last.workspaceSlug : undefined);
  if (workspaceSlug) {
    try {
      const client = await TablationClient.fromSession({
        baseUrl,
        workspaceSlug,
      });
      return { client, baseUrl };
    } catch {
      // No stored session for this host/workspace, or this platform has no
      // session store — fall through to the error below.
    }
  }

  throw new CliError(
    "No API key. Run `tablation login`, pass --key, or set TABLATION_API_KEY (create one under Admin > API keys in your workspace).",
  );
}

/**
 * `--workspace` accepts an id or slug. Omitted: if the key can see exactly
 * one workspace, that's unambiguous — use it; otherwise list the choices
 * and make the user pick (never guess between workspaces).
 *
 * `GET /workspaces/:idOrSlug` resolves an explicit id/slug directly and
 * needs no special role. `GET /workspaces` (used only for the "omitted"
 * fallback below) is PLATFORM_ADMIN-gated — it lists every workspace on
 * the platform — so an ordinary workspace-scoped API key can pass
 * `--workspace` but can't rely on the fallback.
 */
export async function resolveWorkspace(
  ctx: CliContext,
  workspaceArg: string | undefined,
): Promise<Workspace> {
  if (workspaceArg) {
    try {
      return await ctx.client.workspaces.get(workspaceArg);
    } catch {
      throw new CliError(
        `No workspace "${workspaceArg}" visible to this API key.`,
      );
    }
  }
  const workspaces = await ctx.client.workspaces.list();
  if (workspaces.length === 1) return workspaces[0];
  throw new CliError(
    workspaces.length === 0
      ? "This API key has no visible workspaces."
      : `Multiple workspaces visible — pass --workspace <slug>. Available: ${workspaces
          .map((w) => w.slug)
          .join(", ")}`,
  );
}

/**
 * `--template` accepts an id, an `identifier`, or the template's display
 * name (matched case-insensitively) — the Library catalog is platform-wide,
 * so unlike `resolveWorkspace` there's no "exactly one visible" fallback.
 */
export async function resolveLibraryTemplate(
  ctx: CliContext,
  templateArg: string,
): Promise<LibraryTemplate> {
  const templates = await ctx.client.libraryTemplates.list();
  const match = templates.find(
    (t) =>
      t.id === templateArg ||
      t.identifier === templateArg ||
      t.name.toLowerCase() === templateArg.toLowerCase(),
  );
  if (!match) {
    throw new CliError(
      `No library template "${templateArg}". Available: ${
        templates.map((t) => t.name).join(", ") || "(none)"
      }`,
    );
  }
  return match;
}
