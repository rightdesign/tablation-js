import type { HttpClient } from './http';

export interface Workspace {
  id: string;
  slug: string;
  name: string;
  schemaName: string;
  status: 'ACTIVE' | 'SUSPENDED';
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  workspaceId: string;
  slug: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class WorkspacesResource {
  constructor(private readonly http: HttpClient) {}

  get(idOrSlug: string): Promise<Workspace> {
    return this.http.request<Workspace>('GET', `/workspaces/${idOrSlug}`);
  }

  list(): Promise<Workspace[]> {
    return this.http.request<Workspace[]>('GET', '/workspaces');
  }
}

export class ProjectsResource {
  constructor(private readonly http: HttpClient) {}

  get(id: string): Promise<Project> {
    return this.http.request<Project>('GET', `/projects/${id}`);
  }

  list(params: { workspaceId: string }): Promise<Project[]> {
    return this.http.request<Project[]>('GET', '/projects', { query: params });
  }
}
