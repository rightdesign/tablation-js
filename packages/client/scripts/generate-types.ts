/**
 * Regenerates src/generated/openapi.ts from a running backend's OpenAPI
 * document. Requires the backend dev server running locally (see root
 * README) — this hits its live /api/docs-json endpoint rather than a
 * static spec file, since the spec is assembled at boot from decorators.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import openapiTS, { astToString } from 'openapi-typescript';

const SPEC_URL =
  process.env.TABLATION_API_URL ?
    `${process.env.TABLATION_API_URL}/docs-json`
  : 'http://localhost:3000/api/docs-json';

const outFile = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/generated/openapi.ts',
);

async function main() {
  const ast = await openapiTS(new URL(SPEC_URL));
  const header =
    '/* eslint-disable */\n' +
    `// Generated from ${SPEC_URL} by scripts/generate-types.ts — do not hand-edit.\n` +
    `// Regenerate with \`pnpm --filter @tablation/client generate:types\` against a running backend.\n\n`;
  await writeFile(outFile, header + astToString(ast));
  console.log(`Wrote ${outFile}`);
}

main().catch((err: unknown) => {
  console.error(err);
  process.exit(1);
});
