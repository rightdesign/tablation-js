export interface DeviceAuthorizeResponse {
  deviceCode: string;
  userCode: string;
  verificationUri: string;
  verificationUriComplete: string;
  expiresIn: number;
  interval: number;
}

export interface DeviceLoginResult {
  apiKey: {
    id: string;
    name: string;
    keyPrefix: string;
    /** Full secret key — only ever returned here, a one-time reveal. */
    key: string;
    createdAt: string;
  };
  workspace: { id: string; slug: string; name: string };
  identity: { id: string; name: string | null; email: string };
}

type DeviceTokenErrorCode =
  'authorization_pending' | 'slow_down' | 'expired_token' | 'access_denied';

const DEVICE_TOKEN_ERROR_CODES: readonly DeviceTokenErrorCode[] = [
  'authorization_pending',
  'slow_down',
  'expired_token',
  'access_denied',
];

export class DeviceLoginError extends Error {
  constructor(public readonly code: DeviceTokenErrorCode | 'timed_out') {
    super(
      code === 'expired_token'
        ? 'The login code expired before it was approved.'
        : code === 'access_denied'
          ? 'Login was denied.'
          : code === 'timed_out'
            ? 'Timed out waiting for approval.'
            : `Device login failed (${code}).`,
    );
    this.name = 'DeviceLoginError';
  }
}

async function postJson(
  url: string,
  body: unknown,
): Promise<{ status: number; json: unknown }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  const json: unknown = text ? JSON.parse(text) : undefined;
  return { status: res.status, json };
}

/** `baseUrl` is the client's usual `.../api` base — these two routes are the only public (unauthenticated) ones on it. */
export async function authorizeDevice(
  baseUrl: string,
  deviceName?: string,
): Promise<DeviceAuthorizeResponse> {
  const { status, json } = await postJson(`${baseUrl}/auth/device/authorize`, {
    deviceName,
  });
  if (status < 200 || status >= 300) {
    throw new Error(`POST /auth/device/authorize -> ${status}`);
  }
  return json as DeviceAuthorizeResponse;
}

type DeviceTokenPoll =
  | { ok: true; result: DeviceLoginResult }
  | { ok: false; error: DeviceTokenErrorCode };

async function pollDeviceToken(
  baseUrl: string,
  deviceCode: string,
): Promise<DeviceTokenPoll> {
  const { status, json } = await postJson(`${baseUrl}/auth/device/token`, {
    deviceCode,
  });
  if (status >= 200 && status < 300) {
    return { ok: true, result: json as DeviceLoginResult };
  }
  const error = (json as { error?: string } | undefined)?.error;
  if (
    status === 400 &&
    typeof error === 'string' &&
    (DEVICE_TOKEN_ERROR_CODES as string[]).includes(error)
  ) {
    return { ok: false, error: error as DeviceTokenErrorCode };
  }
  throw new Error(`POST /auth/device/token -> ${status}`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Runs the full device-code login flow: authorizes, hands the code/URL to
 * `onCode` to show the user, then polls until approved, denied, or the code
 * expires. `interval` grows by 5s (the server's own poll-bucket width) on
 * every `slow_down`, per RFC 8628 §3.5.
 */
export async function loginWithDeviceCode(
  baseUrl: string,
  opts: {
    deviceName?: string;
    onCode?: (info: DeviceAuthorizeResponse) => void;
  } = {},
): Promise<DeviceLoginResult> {
  const authorize = await authorizeDevice(baseUrl, opts.deviceName);
  opts.onCode?.(authorize);

  let interval = authorize.interval;
  const deadline = Date.now() + authorize.expiresIn * 1000;
  for (;;) {
    await sleep(interval * 1000);
    if (Date.now() > deadline) throw new DeviceLoginError('timed_out');
    const poll = await pollDeviceToken(baseUrl, authorize.deviceCode);
    if (poll.ok) return poll.result;
    if (poll.error === 'authorization_pending') continue;
    if (poll.error === 'slow_down') {
      interval += 5;
      continue;
    }
    throw new DeviceLoginError(poll.error);
  }
}
