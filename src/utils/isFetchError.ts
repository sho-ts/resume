export const isFetchError = (error: unknown): error is { status: number; message: string } => error instanceof Error && error.name === 'FetchError';
