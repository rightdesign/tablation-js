# tablation

The Tablation CLI — install workspace templates and export workspaces from
the command line, for bootstrapping headless API projects.

```
export TABLATION_API_KEY=sk_...        # Admin > API keys in your workspace
export TABLATION_URL=https://tablation.com   # or http://localhost:3000 for dev

tablation install bug-tracker.template.json --workspace my-workspace
tablation export --workspace issues --template "Bug Tracker" \
  --sample-data "Bug Reports:5,Team Members" --description "..."
```

`install` previews the diff and asks for confirmation before writing
(`--dry-run` to only preview, `--yes` to skip the prompt). Installs are
additive — nothing in the target is ever deleted — and a template's sample
rows only land in tables the install itself creates. Installing into a
workspace that already has tables requires `--allow-existing`.

Built on [`@tablation/client`](../client); the manifest format is
an export of any Tablation workspace (Admin > Data model > Export, or `tablation export`).

## Development

```
pnpm --filter tablation dev -- export --help   # run from source (tsx)
pnpm --filter tablation build                  # bundle to dist/
```
