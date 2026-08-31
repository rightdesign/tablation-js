# CLAUDE.md — tablation-js

**This is the public, open-source (MIT) home for Tablation's developer-facing tooling.** The `synthesis` repo (the product/platform itself) stays private — never move private-repo internals here without a deliberate decision to open-source them.

## What lives here

- `packages/client` — `@tablation/client` (classes `TablationClient`/`TablationApiError`). Originated as the private repo's `packages/client-ts` (`@synthesis/client`) and was renamed/extracted 2026-08-16.
- `packages/cli` — the `tablation` CLI (install/export commands today; codegen is a planned later phase).

## Naming rule

`@tablation/*` scope + "Tablation" prose for anything user-facing or publishable from this repo. (`@synthesis/*` is reserved for the private synthesis repo's internal packages — Synthesis is the internal project name only, never used in this repo's public-facing surface.)

## Sibling-repo dependency

`tablation-example-blog` (a separate repo, `~/SynologyDrive/arena-mbp/git/rightdesign/tablation-example-blog`, `@tablation/example-blog`) consumes this repo's client via a `link:` dependency (`"@tablation/client": "link:../tablation-js/packages/client"`) until the package is published to npm. That means **tablation-js, tablation-example-blog, and synthesis must stay sibling-checked-out** at the same directory level — moving this repo elsewhere breaks that link. `tablation-example-blog` was deliberately extracted out of the synthesis monorepo (2026-08-16) rather than living under `apps/*` there, because its own `package.json` drifting from the pushed root lockfile was breaking synthesis's deploy-time `pnpm install`; it has its own `pnpm-workspace.yaml` with `allowBuilds` for its Astro build-time deps (esbuild/sharp/workerd) since it's no longer covered by any root workspace file.

## Future consumer

A planned `tablation-issues` repo (not yet created) will codify the shared Issues/tracker workspace (tables, fields, views) used by `crew`'s `default` prompt set, and install it into a Tablation library via this repo's `tablation` CLI (`install` command). Keep the install-command contract (what a workspace-definition package looks like on disk, how `install` consumes it) stable and documented with that future consumer in mind.

## Commit ownership

Brad commits changes here himself (git-inited but historically left uncommitted between sessions) — same convention as the rest of the Tablation repos: don't offer or auto-commit on this repo's primary branch.
