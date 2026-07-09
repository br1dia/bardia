/**
 * API Routes Handler
 */

import type { WorkerContext } from '../types';
import { STATUS, ERRORS } from '../constants';

export async function handleApiRequest(
  request: Request,
  context: WorkerContext
): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Health check
  if (pathname === '/api/health') {
    return new Response(
      JSON.stringify({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
      }),
      {
        status: STATUS.OK,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Version endpoint
  if (pathname === '/api/version') {
    return new Response(
      JSON.stringify({
        version: '1.0.0',
        name: 'Bardia',
        description: 'Advanced Traffic Intelligence Gateway',
      }),
      {
        status: STATUS.OK,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Analytics endpoints
  if (pathname.startsWith('/api/analytics')) {
    return new Response(
      JSON.stringify({
        totalRequests: 0,
        totalBytes: 0,
        averageLatency: 0,
        errorRate: 0,
      }),
      {
        status: STATUS.OK,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Rules endpoints
  if (pathname.startsWith('/api/rules')) {
    return new Response(
      JSON.stringify({ rules: [] }),
      {
        status: STATUS.OK,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Not found
  return new Response(
    JSON.stringify({ error: ERRORS.NOT_FOUND }),
    {
      status: STATUS.NOT_FOUND,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
