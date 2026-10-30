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

## [0.1.9] — 2026-10-30

- TCLI-2669 Device login errors now include the server's reason.

## [0.1.8] — 2026-10-29

- TCLI-2627 @tablation/client reads macOS keychain sessions that contain non-ASCII characters, and stores new ones as ASCII-escaped JSON.

## [0.1.7] — 2026-10-25

- TCLI-2312 The CLI keeps its default login in ~/.config/tablation/config.json instead of ship.json, and no longer stores an unused ship id.

## [0.1.6] — 2026-10-16

- ISSUE-1778 @tablation/client no longer throws a SyntaxError when an error response is not JSON; it raises a TablationApiError with the status and the first line of the body.

## [0.1.3] — 2026-10-05

- The release gate builds the client before typechecking, so it no longer fails against a stale client dist (TCLI-1367)
