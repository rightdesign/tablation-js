import type { HttpClient, QueryParams } from './http';

export interface RecordListParams {
  limit?: number;
  offset?: number;
  /** Serialized FilterPathNode JSON — see apps/backend/src/records/filter-path.ts. */
  filters?: string;
}

/**
 * Record shape is workspace-defined (each data model has its own columns),
 * so this stays generic rather than typed from the OpenAPI spec — callers
 * supply `T` themselves, or use `DataModelsResource.get()` to inspect a
 * model's field catalog at runtime. See packages/client-ts/README.md.
 */
export class RecordsResource {
  constructor(private readonly http: HttpClient) {}

  list<T = Record<string, unknown>>(
    dataModelId: string,
    params?: RecordListParams,
  ): Promise<T[]> {
    return this.http.request<T[]>(
      'GET',
      `/data-models/${dataModelId}/records`,
      {
        query: params as QueryParams,
      },
    );
  }

  get<T = Record<string, unknown>>(
    dataModelId: string,
    recordId: string,
  ): Promise<T> {
    return this.http.request<T>(
      'GET',
      `/data-models/${dataModelId}/records/${recordId}`,
    );
  }

  create<T = Record<string, unknown>>(
    dataModelId: string,
    body: Record<string, unknown>,
  ): Promise<T> {
    return this.http.request<T>('POST', `/data-models/${dataModelId}/records`, {
      body,
    });
  }

  update<T = Record<string, unknown>>(
    dataModelId: string,
    recordId: string,
    body: Record<string, unknown>,
  ): Promise<T> {
    return this.http.request<T>(
      'PATCH',
      `/data-models/${dataModelId}/records/${recordId}`,
      {
        body,
      },
    );
  }

  remove(dataModelId: string, recordId: string): Promise<void> {
    return this.http.request<void>(
      'DELETE',
      `/data-models/${dataModelId}/records/${recordId}`,
    );
  }
}
