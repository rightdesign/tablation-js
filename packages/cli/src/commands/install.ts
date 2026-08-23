import { readFileSync } from "node:fs";
import { createInterface } from "node:readline/promises";
import { parseArgs } from "node:util";
import type { WorkspaceManifest } from "@tablation/client";
import { buildContext, CliError, resolveWorkspace } from "../context";
import { printApplySummary, printDiff } from "../format";

const HELP = `Usage: tablation install <file-or-url> [options]

Installs a workspace manifest/template: previews the diff, asks for
confirmation, then applies. Additive only — nothing in the target workspace
is ever deleted, and sample data only lands in tables the install creates.

Options:
  --workspace <id|slug>   Target workspace (optional when the key sees exactly one)
  --allow-existing        Proceed even though the target workspace already has tables
  --no-sample-data        Strip the template's sample rows before installing
  --dry-run               Preview only; write nothing
  --yes                   Skip the confirmation prompt
  --url <base>            Server base URL (default $TABLATION_URL or https://tablation.com)
  --key <api key>         Workspace API key (default $TABLATION_API_KEY)
  -h, --help              Show this help
`;

async function loadManifest(source: string): Promise<WorkspaceManifest> {
  let text: string;
  if (/^https?:\/\//.test(source)) {
    // Real-ish User-Agent: some CDN bot protections (Cloudflare) block
    // bare default agents outright.
    const res = await fetch(source, {
      headers: { "User-Agent": "Mozilla/5.0 TablationCLI/0.1" },
    });
    if (!res.ok) {
      throw new CliError(`Fetching ${source} failed: ${res.status}`);
    }
    text = await res.text();
  } else {
    text = readFileSync(source, "utf8");
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new CliError(`${source} is not valid JSON`);
  }
  if (
    !parsed ||
    typeof parsed !== "object" ||
    typeof (parsed as { formatVersion?: unknown }).formatVersion !== "number"
  ) {
    throw new CliError(
      `${source} is not a workspace manifest (missing formatVersion)`,
    );
  }
  return parsed as WorkspaceManifest;
}

export async function installCommand(argv: string[]): Promise<void> {
  const { values, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      workspace: { type: "string" },
      "allow-existing": { type: "boolean" },
      "no-sample-data": { type: "boolean" },
      "dry-run": { type: "boolean" },
      yes: { type: "boolean" },
      url: { type: "string" },
      key: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help || positionals.length === 0) {
    console.log(HELP);
    if (!values.help) process.exitCode = 2;
    return;
  }
  if (positionals.length > 1) {
    throw new CliError("install takes exactly one <file-or-url>");
  }

  const manifest = await loadManifest(positionals[0]);
  if (values["no-sample-data"]) delete manifest.sampleRecords;

  const ctx = buildContext(values);
  const workspace = await resolveWorkspace(ctx, values.workspace);

  // Non-empty targets need an explicit opt-in: additive-only makes this
  // *safe*, but installing a template into a workspace full of real tables
  // is usually a mistake, not an intent.
  const existing = await ctx.client.dataModels.list({
    workspaceId: workspace.id,
  });
  if (existing.length > 0 && !values["allow-existing"]) {
    throw new CliError(
      `Workspace ${workspace.slug} already has ${existing.length} table(s). ` +
        "Pass --allow-existing to install into it anyway (the install stays additive; nothing is deleted or overwritten).",
    );
  }

  console.log(`Target workspace: ${workspace.name} (${workspace.slug})\n`);
  const diff = await ctx.client.exportImport.preview(workspace.id, manifest);
  printDiff(diff);

  if (diff.hasUnresolvedConflicts) {
    throw new CliError(
      "Naming conflicts block this install — rename in the source workspace and re-export, or rename the conflicting entities in the target.",
    );
  }
  if (values["dry-run"]) {
    console.log("\nDry run — nothing written.");
    return;
  }

  if (!values.yes) {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = (await rl.question("\nProceed? [y/N] "))
      .trim()
      .toLowerCase();
    rl.close();
    if (answer !== "y" && answer !== "yes") {
      console.log("Aborted.");
      process.exitCode = 1;
      return;
    }
  }

  console.log("");
  const summary = await ctx.client.exportImport.apply(workspace.id, manifest);
  printApplySummary(summary);
}
