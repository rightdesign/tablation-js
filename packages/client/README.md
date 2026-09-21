# @tablation/client

Typed TypeScript client for the Tablation API.

## Usage

```ts
import { TablationClient } from '@tablation/client';

const client = new TablationClient({
  baseUrl: 'http://localhost:3000/api',
  apiKey: process.env.TABLATION_API_KEY!,
});

const dataModel = await client.dataModels.get(dataModelId);

interface Post {
  id: string;
  title: string;
  slug: string;
  body: string;
  publishedAt: string;
}
const posts = await client.records.list<Post>(dataModelId);

// Fetch a Media Library image pre-cropped to a target size around its focal point.
const { data, contentType } = await client.media.crop(workspaceId, itemId, {
  width: 800,
  height: 600,
});
```

## Regenerating types

`src/generated/openapi.ts` is generated from a running backend's OpenAPI document, not hand-edited:

```
# with a running Tablation instance (any deployment, or local dev)
pnpm --filter @tablation/client generate:types
```

## Records are generic, on purpose

`client.records.*` methods take a type parameter (`list<T>()`, `get<T>()`, ...) defaulting to
`Record<string, unknown>` — a workspace's data models are user-defined, so their field shape
can't be represented in the platform's own OpenAPI spec the way `workspaces`/`projects`/`dataModels`
can. Callers hand-write (or cast to) the interface for their model today.

**Deferred follow-up:** `tablation codegen` (see [`packages/cli`](../cli)) — reads a workspace's field catalog and emits a
matching TS interface per model, plus typed per-table accessors, on top of this client.
