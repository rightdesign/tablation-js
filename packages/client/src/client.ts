import { DataModelsResource } from './data-models';
import { ExportImportResource } from './export-import';
import { HttpClient, type TablationClientConfig } from './http';
import { LibraryTemplatesResource } from './library-templates';
import { RecordsResource } from './records';
import { ProjectsResource, WorkspacesResource } from './resources';
import { getSessionStore, hostFromUrl, type SessionStore } from './session';

export class TablationClient {
  readonly workspaces: WorkspacesResource;
  readonly projects: ProjectsResource;
  readonly dataModels: DataModelsResource;
  readonly records: RecordsResource;
  readonly exportImport: ExportImportResource;
  readonly libraryTemplates: LibraryTemplatesResource;

  constructor(config: TablationClientConfig) {
    const http = new HttpClient(config);
    this.workspaces = new WorkspacesResource(http);
    this.projects = new ProjectsResource(http);
    this.dataModels = new DataModelsResource(http);
    this.records = new RecordsResource(http);
    this.exportImport = new ExportImportResource(http);
    this.libraryTemplates = new LibraryTemplatesResource(http);
  }

  /**
   * Builds a client from a session previously stored by `loginWithDeviceCode`
   * + a `SessionStore`, instead of an explicit `apiKey`. Throws if there's no
   * stored session for this host/workspace (the caller should tell the user
   * to log in) or if this platform has no session store implementation.
   */
  static async fromSession(opts: {
    baseUrl: string;
    workspaceSlug: string;
    sessionStore?: SessionStore;
    headers?: Record<string, string>;
  }): Promise<TablationClient> {
    const store = opts.sessionStore ?? getSessionStore();
    const host = hostFromUrl(opts.baseUrl);
    const session = await store.get(host, opts.workspaceSlug);
    if (!session) {
      throw new Error(
        `No stored session for ${host}/${opts.workspaceSlug}. Log in first.`,
      );
    }
    return new TablationClient({
      baseUrl: opts.baseUrl,
      apiKey: session.apiKey,
      headers: opts.headers,
    });
  }
}
