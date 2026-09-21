import { TablationApiError } from './errors';

export interface TablationClientConfig {
  /** e.g. "http://localhost:3000/api" or "https://your-instance.example.com/api" */
  baseUrl: string;
  /** A workspace API key — see Admin > API keys, or POST /workspaces/:id/api-keys. Sent as a bearer token. */
  apiKey: string;
  /** Sent on every request. Cannot override Content-Type or Authorization. */
  headers?: Record<string, string>;
}

export type QueryParams = Record<string, string | number | boolean | undefined>;

function buildQuery(params?: QueryParams): string {
  if (!params) return '';
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) search.set(key, String(value));
  }
  const qs = search.toString();
  return qs ? `?${qs}` : '';
}

/** A binary response's bytes plus the content type the server sent them as — see `HttpClient.requestBinary`. */
export interface BinaryResponse {
  data: ArrayBuffer;
  contentType: string;
}

export class HttpClient {
  constructor(private readonly config: TablationClientConfig) {}

  request<T>(
    method: string,
    path: string,
    options?: {
      query?: QueryParams;
      body?: unknown;
      headers?: Record<string, string>;
    },
  ): Promise<T> {
    return this.raw<T>(
      method,
      `${path}${buildQuery(options?.query)}`,
      options?.body,
      options?.headers,
    );
  }

  /**
   * Like `request`, but for an endpoint whose *successful* response is raw bytes
   * (e.g. an image), not JSON — TABL-1022's first use is the Media Library crop
   * route. No `Content-Type: application/json`/`JSON.parse` on the way in, and no
   * request body support (nothing here needs one yet). An error response is still
   * JSON, same as every other route, so it's parsed and surfaced as the usual
   * `TablationApiError` rather than returned as opaque bytes.
   */
  async requestBinary(
    method: string,
    path: string,
    options?: {
      query?: QueryParams;
      headers?: Record<string, string>;
    },
  ): Promise<BinaryResponse> {
    const res = await fetch(
      `${this.config.baseUrl}${path}${buildQuery(options?.query)}`,
      {
        method,
        headers: {
          ...this.config.headers,
          Authorization: `Bearer ${this.config.apiKey}`,
          ...options?.headers,
        },
      },
    );
    if (!res.ok) {
      throw await toApiError(method, path, res);
    }
    return {
      data: await res.arrayBuffer(),
      contentType:
        res.headers.get('content-type') ?? 'application/octet-stream',
    };
  }

  private async raw<T>(
    method: string,
    path: string,
    body?: unknown,
    headers?: Record<string, string>,
  ): Promise<T> {
    const res = await fetch(`${this.config.baseUrl}${path}`, {
      method,
      headers: {
        ...this.config.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.config.apiKey}`,
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      throw await toApiError(method, path, res);
    }
    const text = await res.text();
    return (text ? JSON.parse(text) : undefined) as T;
  }
}

/** Shared by `raw` and `requestBinary`: a non-2xx response's body is always JSON, whatever the route normally returns on success. */
async function toApiError(
  method: string,
  path: string,
  res: Response,
): Promise<TablationApiError> {
  const text = await res.text();
  const json: unknown = text ? JSON.parse(text) : undefined;
  const message = extractErrorMessage(json) ?? res.statusText;
  return new TablationApiError(
    `${method} ${path} -> ${res.status}: ${message}`,
    res.status,
    json,
  );
}

function extractErrorMessage(json: unknown): string | undefined {
  if (typeof json !== 'object' || json === null || !('message' in json))
    return undefined;
  const message = json.message;
  return Array.isArray(message)
    ? message.join(', ')
    : (message as string | undefined);
}
