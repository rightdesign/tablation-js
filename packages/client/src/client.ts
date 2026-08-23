import { DataModelsResource } from './data-models';
import { ExportImportResource } from './export-import';
import { HttpClient, type TablationClientConfig } from './http';
import { RecordsResource } from './records';
import { ProjectsResource, WorkspacesResource } from './resources';

export class TablationClient {
  readonly workspaces: WorkspacesResource;
  readonly projects: ProjectsResource;
  readonly dataModels: DataModelsResource;
  readonly records: RecordsResource;
  readonly exportImport: ExportImportResource;

  constructor(config: TablationClientConfig) {
    const http = new HttpClient(config);
    this.workspaces = new WorkspacesResource(http);
    this.projects = new ProjectsResource(http);
    this.dataModels = new DataModelsResource(http);
    this.records = new RecordsResource(http);
    this.exportImport = new ExportImportResource(http);
  }
}
