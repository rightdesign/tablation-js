# Changelog

All notable changes to `@tablation/client` and the `tablation` CLI
(`@tablation/cli`). Both packages are versioned in lockstep: the version below
is the `version` field in `packages/client/package.json` and
`packages/cli/package.json`, and the `vX.Y.Z` git tag.

## How this file is maintained

Each ticket branch records, in its commit message, a `Bump:` line (`patch` or
`minor`, never `major`) and one or more `Changelog:` lines worded as they should
read here. The crew's release phase squash-merges every verified ticket and then,
in one commit, adds a `## [x.y.z] — YYYY-MM-DD` section here (newest first),
bumps both package versions, pushes `main` and the annotated `vX.Y.Z` tag.
`.github/workflows/publish.yml` publishes to npm from that tag. Do not bump
versions or edit this file on a ticket branch.
