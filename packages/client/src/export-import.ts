import type { HttpClient } from './http';

/**
 * A workspace metadata manifest (schema + views + workflows, optionally a
 * template envelope and sample records) — the file format documented in
 * apps/backend/src/data-model-export-import/manifest.types.ts and
 * docs/WORKSPACE_TEMPLATES_PLAN.md. Deliberately loose here: the client
 * round-trips it unmodified; only the fields callers display are typed.
 */
export interface WorkspaceManifest {
  formatVersion: number;
  template?: TemplateEnvelope;
  sampleRecords?: { dataModelId: string; records: unknown[] }[];
  [key: string]: unknown;
}

export interface TemplateEnvelope {
  name: string;
  description: string;
  version: string;
  icon?: string;
  sampleDataTables?: string[];
}

export interface ImportDiffEntry {
  manifestId: string;
  existingId?: string;
  label: string;
}

export interface ImportDiff {
  formatVersion: number;
  template: TemplateEnvelope | null;
  fieldTypes: {
    creates: ImportDiffEntry[];
    updates: ImportDiffEntry[];
    conflicts: { name: string }[];
  };
  dataModels: {
    creates: ImportDiffEntry[];
    updates: ImportDiffEntry[];
    conflicts: { name: string }[];
  };
  fields: { creates: ImportDiffEntry[]; updates: ImportDiffEntry[] };
  keys: { creates: ImportDiffEntry[]; updates: ImportDiffEntry[] };
  relationships: {
    creates: ImportDiffEntry[];
    updates: ImportDiffEntry[];
    blocked: ImportDiffEntry[];
  };
  views: { creates: ImportDiffEntry[]; skippedExisting: ImportDiffEntry[] };
  workflows: { creates: ImportDiffEntry[]; skippedExisting: ImportDiffEntry[] };
  sampleRecords: {
    manifestDataModelId: string;
    label: string;
    count: number;
    willInstall: boolean;
  }[];
  unresolvedSystemFieldTypes: string[];
  hasUnresolvedConflicts: boolean;
}

export interface ImportApplySummary {
  fieldTypes: { created: number; updated: number };
  dataModels: { created: number; updated: number };
  fields: { created: number; updated: number };
  keys: { created: number; skippedUpdates: number };
  relationships: { created: number; skippedUpdates: number };
  views: { created: number; skippedExisting: number };
  workflows: { created: number; skippedExisting: number };
  sampleRecords: {
    created: number;
    skippedExistingModel: number;
    skippedRows: number;
    droppedReferences: number;
  };
}

export class ExportImportResource {
  constructor(private readonly http: HttpClient) {}

  /** Exports the workspace's metadata manifest. `template` turns it into a "Save as template" export; `sampleRecords` opts specific tables into carrying sample rows (per-table caps, server max 200). */
  export(
    workspaceId: string,
    opts?: {
      template?: { name: string; description: string; version: string };
      sampleRecords?: { dataModelId: string; cap?: number }[];
    },
  ): Promise<WorkspaceManifest> {
    return this.http.request<WorkspaceManifest>(
      'GET',
      `/workspaces/${workspaceId}/data-model-export-import/export`,
      {
        query: {
          template: opts?.template ? JSON.stringify(opts.template) : undefined,
          sampleRecords: opts?.sampleRecords?.length
            ? JSON.stringify(opts.sampleRecords)
            : undefined,
        },
      },
    );
  }

  /** Diffs a manifest against the workspace without writing anything. */
  preview(
    workspaceId: string,
    manifest: WorkspaceManifest,
  ): Promise<ImportDiff> {
    return this.http.request<ImportDiff>(
      'POST',
      `/workspaces/${workspaceId}/data-model-export-import/import/preview`,
      { body: manifest },
    );
  }

  /** Writes the manifest into the workspace (additive; 400 on unresolved naming conflicts — preview first). */
  apply(
    workspaceId: string,
    manifest: WorkspaceManifest,
  ): Promise<ImportApplySummary> {
    return this.http.request<ImportApplySummary>(
      'POST',
      `/workspaces/${workspaceId}/data-model-export-import/import/apply`,
      { body: manifest },
    );
  }
}
