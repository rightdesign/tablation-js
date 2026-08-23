import { TablationApiError } from './errors';

export interface TablationClientConfig {
  /** e.g. "http://localhost:3000/api" or "https://your-instance.example.com/api" */
  baseUrl: string;
  /** A workspace API key — see Admin > API keys, or POST /workspaces/:id/api-keys. Sent as a bearer token. */
  apiKey: string;
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

export class HttpClient {
  constructor(private readonly config: TablationClientConfig) {}

  request<T>(
    method: string,
    path: string,
    options?: { query?: QueryParams; body?: unknown },
  ): Promise<T> {
    return this.raw<T>(
      method,
      `${path}${buildQuery(options?.query)}`,
      options?.body,
    );
  }

  private async raw<T>(
    method: string,
    path: string,
    body?: unknown,
  ): Promise<T> {
    const res = await fetch(`${this.config.baseUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.config.apiKey}`,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
    const text = await res.text();
    const json: unknown = text ? JSON.parse(text) : undefined;
    if (!res.ok) {
      const message = extractErrorMessage(json) ?? res.statusText;
      throw new TablationApiError(
        `${method} ${path} -> ${res.status}: ${message}`,
        res.status,
        json,
      );
    }
    return json as T;
  }
}

function extractErrorMessage(json: unknown): string | undefined {
  if (typeof json !== 'object' || json === null || !('message' in json))
    return undefined;
  const message = json.message;
  return Array.isArray(message)
    ? message.join(', ')
    : (message as string | undefined);
}
