import { TablationApiError } from "@tablation/client";
import { exportCommand } from "./commands/export";
import { installCommand } from "./commands/install";
import { CliError } from "./context";

const HELP = `tablation — the Tablation CLI

Usage: tablation <command> [options]

Commands:
  install <file-or-url>   Install a workspace manifest/template (preview, confirm, apply)
  export                  Export a workspace to a manifest file, optionally as a template

Run "tablation <command> --help" for command options.

Connection (any command):
  --url <base>    Server base URL   (default: $TABLATION_URL or https://tablation.com)
  --key <key>     Workspace API key (default: $TABLATION_API_KEY)
`;

async function main(): Promise<void> {
  const [command, ...rest] = process.argv.slice(2);
  switch (command) {
    case "install":
      await installCommand(rest);
      break;
    case "export":
      await exportCommand(rest);
      break;
    case undefined:
    case "-h":
    case "--help":
    case "help":
      console.log(HELP);
      if (command === undefined) process.exitCode = 2;
      break;
    default:
      console.error(`Unknown command "${command}"\n`);
      console.log(HELP);
      process.exitCode = 2;
  }
}

main().catch((err: unknown) => {
  if (err instanceof CliError || err instanceof TablationApiError) {
    console.error(`Error: ${err.message}`);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
