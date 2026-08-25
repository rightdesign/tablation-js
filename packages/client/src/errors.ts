export class TablationApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly body: unknown,
  ) {
    super(message);
    this.name = 'TablationApiError';
  }
}

/**
 * Thrown by `RecordsResource.update()` when called with `expectedUpdatedAt`
 * and the record changed since the caller last read it (the server's
 * compare-and-swap guard rejected the write) — distinguishes "someone else
 * got there first" from any other API/transport failure.
 */
export class StaleWriteError extends TablationApiError {
  constructor(body: unknown) {
    super('Record has been modified since it was loaded', 409, body);
    this.name = 'StaleWriteError';
  }
}
