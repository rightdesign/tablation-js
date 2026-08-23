import { writeFileSync } from "node:fs";
import { parseArgs } from "node:util";
import { buildContext, CliError, resolveWorkspace } from "../context";

const HELP = `Usage: tablation export [options]

Exports a workspace's metadata manifest (schema, views, workflows) to a JSON
file — plain, or as an installable template with sample data.

Options:
  --workspace <id|slug>      Workspace to export (optional when the key sees exactly one)
  --out <file>               Output path (default: derived from template name, else data-model-export.json)
  --template <name>          Save as a template with this name
  --description <text>       Template description (with --template)
  --template-version <v>     Template version string (default 1.0.0, with --template)
  --sample-data <spec>       Opt tables into sample rows: "Bug Reports:5,Team Members"
                             (table name or id, optional :cap per table; server default 25, max 200)
  --url <base>               Server base URL (default $TABLATION_URL or https://tablation.com)
  --key <api key>            Workspace API key (default $TABLATION_API_KEY)
  -h, --help                 Show this help
`;

export async function exportCommand(argv: string[]): Promise<void> {
  const { values } = parseArgs({
    args: argv,
    options: {
      workspace: { type: "string" },
      out: { type: "string" },
      template: { type: "string" },
      description: { type: "string" },
      "template-version": { type: "string" },
      "sample-data": { type: "string" },
      url: { type: "string" },
      key: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help) {
    console.log(HELP);
    return;
  }

  const ctx = buildContext(values);
  const workspace = await resolveWorkspace(ctx, values.workspace);

  // Resolve "Table Name:cap" specs against the workspace's real tables —
  // by name (case-insensitive) or id, failing loudly on anything unknown.
  let sampleRecords: { dataModelId: string; cap?: number }[] | undefined;
  if (values["sample-data"]) {
    const models = await ctx.client.dataModels.list({
      workspaceId: workspace.id,
    });
    sampleRecords = values["sample-data"].split(",").map((rawSpec) => {
      const spec = rawSpec.trim();
      const capMatch = /^(.*?):(\d+)$/.exec(spec);
      const ref = (capMatch ? capMatch[1] : spec).trim();
      const cap = capMatch ? Number(capMatch[2]) : undefined;
      const model = models.find(
        (m) => m.id === ref || m.name.toLowerCase() === ref.toLowerCase(),
      );
      if (!model) {
        throw new CliError(
          `--sample-data: no table "${ref}" in workspace ${workspace.slug}. Tables: ${models
            .map((m) => m.name)
            .join(", ")}`,
        );
      }
      return { dataModelId: model.id, cap };
    });
  }

  const template = values.template
    ? {
        name: values.template,
        description: values.description ?? "",
        version: values["template-version"] ?? "1.0.0",
      }
    : undefined;
  if (!template && (values.description || values["template-version"])) {
    throw new CliError(
      "--description/--template-version only apply with --template",
    );
  }

  const manifest = await ctx.client.exportImport.export(workspace.id, {
    template,
    sampleRecords,
  });

  const out =
    values.out ??
    (template
      ? `${template.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")}.template.json`
      : "data-model-export.json");
  writeFileSync(out, JSON.stringify(manifest, null, 2) + "\n");

  const rowCount = (manifest.sampleRecords ?? []).reduce(
    (n, e) => n + e.records.length,
    0,
  );
  console.log(
    `Exported ${workspace.slug} to ${out}` +
      (template ? ` (template "${template.name}" v${template.version})` : "") +
      (rowCount > 0 ? ` with ${rowCount} sample row(s)` : ""),
  );
}
