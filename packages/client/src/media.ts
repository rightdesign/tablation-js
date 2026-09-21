import type { BinaryResponse, HttpClient } from './http';

export class MediaResource {
  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches a Media Library image pre-cropped to `width`x`height` around its focal
   * point — TABL-965's `GET /workspaces/:workspaceId/files/media-library/:id/crop`,
   * rendered on demand and never written to storage or the Media Library. `width`
   * and `height` are integers clamped server-side to [16, 4096]; the response is
   * never upscaled past the source's native resolution. Throws `TablationApiError`
   * for a bad size (400), unknown item (404), or non-raster source (415).
   */
  crop(
    workspaceId: string,
    itemId: string,
    params: { width: number; height: number },
  ): Promise<BinaryResponse> {
    return this.http.requestBinary(
      'GET',
      `/workspaces/${workspaceId}/files/media-library/${itemId}/crop`,
      { query: { w: params.width, h: params.height } },
    );
  }
}
