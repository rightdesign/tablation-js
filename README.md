# tablation-js

Open-source developer tooling for [Tablation](https://tablation.com) — the
no-code database platform. Two packages:

- [`@tablation/client`](packages/client) — typed TypeScript client for the
  Tablation API. Workspaces, projects, data models, records, and
  workspace-manifest export/import, authenticated with a workspace API key.
- [`@tablation/cli`](packages/cli) — the `tablation` CLI. Install workspace templates,
  export workspaces (optionally as templates with sample data), and
  bootstrap headless API projects.

```
npx @tablation/cli install bug-tracker.template.json --workspace my-workspace
```

## Development

```
pnpm install
pnpm build        # all packages
pnpm typecheck
pnpm lint:ci
```

Both packages are plain TypeScript with no runtime dependencies beyond
native `fetch` (Node ≥ 20). The CLI depends on the client via the pnpm
workspace.

## License

MIT
