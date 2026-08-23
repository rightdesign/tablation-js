import type { HttpClient } from './http';

export interface FieldType {
  id: string;
  name: string;
  kind: 'PRIMITIVE' | 'STRUCTURED' | 'REFERENCE';
  baseType: string;
  isSystem: boolean;
}

export interface DataField {
  id: string;
  dataModelId: string;
  fieldTypeId: string;
  name: string;
  columnName: string;
  isRequired: boolean;
  isUnique: boolean;
  fieldType?: FieldType;
}

export interface DataModel {
  id: string;
  workspaceId: string;
  projectId: string | null;
  name: string;
  tableName: string;
  createdAt: string;
  updatedAt: string;
  fields: DataField[];
}

export class DataModelsResource {
  constructor(private readonly http: HttpClient) {}

  /** Accepts either a data model's id or its tableName (pass workspaceId when using the latter). */
  get(idOrSlug: string, workspaceId?: string): Promise<DataModel> {
    return this.http.request<DataModel>('GET', `/data-models/${idOrSlug}`, {
      query: { workspaceId },
    });
  }

  list(params: {
    workspaceId?: string;
    projectId?: string;
  }): Promise<DataModel[]> {
    return this.http.request<DataModel[]>('GET', '/data-models', {
      query: params,
    });
  }
}
