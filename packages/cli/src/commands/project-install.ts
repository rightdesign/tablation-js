import { parseArgs } from "node:util";
import { openBrowser } from "../browser";
import {
  buildContext,
  CliError,
  resolveLibraryTemplate,
  resolveWorkspace,
} from "../context";
import { printApplySummary } from "../format";

const INSTALL_HELP = `Usage: tablation project install <name> --workspace <id|slug> --template <name> [options]

Installs a Library template into a new project called <name>, in the given
workspace, then opens the new project in a browser.

Options:
  --workspace <id|slug>   Target workspace (required)
  --template <id|name>    Library template to install (required)
  --no-theme              Don't apply the template's own theme to the new project
  --no-open               Don't open the new project in a browser
  --url <base>            Server base URL (default $TABLATION_URL or https://tablation.com)
  --key <api key>         Workspace API key (default $TABLATION_API_KEY)
  -h, --help              Show this help
`;

async function installSubcommand(argv: string[]): Promise<void> {
  const { values, positionals } = parseArgs({
    args: argv,
    allowPositionals: true,
    options: {
      workspace: { type: "string" },
      template: { type: "string" },
      "no-theme": { type: "boolean" },
      "no-open": { type: "boolean" },
      url: { type: "string" },
      key: { type: "string" },
      help: { type: "boolean", short: "h" },
    },
  });
  if (values.help || positionals.length === 0) {
    console.log(INSTALL_HELP);
    if (!values.help) process.exitCode = 2;
    return;
  }
  if (positionals.length > 1) {
    throw new CliError("project install takes exactly one <name>");
  }
  if (!values.template) {
    throw new CliError("project install requires --template <id|name>");
  }
  const projectName = positionals[0];

  const ctx = await buildContext(values);
  const workspace = await resolveWorkspace(ctx, values.workspace);
  const template = await resolveLibraryTemplate(ctx, values.template);

  console.log(
    `Installing "${template.name}" into ${workspace.name} (${workspace.slug}) as "${projectName}"...`,
  );
  const result = await ctx.client.libraryTemplates.install(template.id, {
    workspaceId: workspace.id,
    projectName,
    applyTheme: values["no-theme"] ? false : undefined,
  });

  console.log(`\nCreated project "${result.project.name}" (${result.project.slug}).`);
  printApplySummary(result.summary);

  const origin = ctx.baseUrl.replace(/\/api$/, "");
  const projectUrl = `${origin}/w/${workspace.slug}/p/${result.project.slug}`;
  console.log(`\n${projectUrl}`);
  if (!values["no-open"]) openBrowser(projectUrl);
}

export async function projectCommand(argv: string[]): Promise<void> {
  const [sub, ...rest] = argv;
  switch (sub) {
    case "install":
      await installSubcommand(rest);
      break;
    case undefined:
    case "-h":
    case "--help":
    case "help":
      console.log(INSTALL_HELP);
      if (sub === undefined) process.exitCode = 2;
      break;
    default:
      console.error(`Unknown "project" subcommand "${sub}"\n`);
      console.log(INSTALL_HELP);
      process.exitCode = 2;
  }
}
