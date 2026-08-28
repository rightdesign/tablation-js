import type { HttpClient } from './http';
import type { ImportApplySummary } from './export-import';
import type { Project } from './resources';

export interface LibraryTemplate {
  id: string;
  identifier: string;
  version: number;
  name: string;
  description: string;
  icon: string | null;
  dataModelCount: number;
  viewCount: number;
  sourceWorkspaceName: string | null;
  createdAt: string;
}

export interface LibraryInstallResult {
  project: Project;
  summary: ImportApplySummary;
}

export class LibraryTemplatesResource {
  constructor(private readonly http: HttpClient) {}

  list(): Promise<LibraryTemplate[]> {
    return this.http.request<LibraryTemplate[]>('GET', '/library-templates');
  }

  get(id: string): Promise<LibraryTemplate> {
    return this.http.request<LibraryTemplate>('GET', `/library-templates/${id}`);
  }

  install(
    id: string,
    body: { workspaceId: string; projectName?: string; applyTheme?: boolean },
  ): Promise<LibraryInstallResult> {
    return this.http.request<LibraryInstallResult>(
      'POST',
      `/library-templates/${id}/install`,
      { body },
    );
  }
}
