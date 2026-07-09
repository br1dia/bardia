/**
 * Bardia - Advanced Traffic Intelligence Gateway
 * Main Worker Entry Point
 */

import type { WorkerContext } from './types';
import { handleApiRequest } from './routes/api';
import { handleDashboard } from './routes/dashboard';
import { handleProxy } from './routes/proxy';
import { STATUS } from './constants';

export default {
  async fetch(
    request: Request,
    env: any,
    ctx: ExecutionContext
  ): Promise<Response> {
    try {
      const context: WorkerContext = { env, ctx };
      const url = new URL(request.url);
      const pathname = url.pathname;

      // Health check
      if (pathname === '/health' || pathname === '/ping') {
        return new Response(
          JSON.stringify({ status: 'ok', version: '1.0.0' }),
          {
            status: STATUS.OK,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      // Route requests
      if (pathname.startsWith('/api/')) {
        return await handleApiRequest(request, context);
      }

      if (pathname.startsWith('/panel/') || pathname.startsWith('/dashboard')) {
        return await handleDashboard(request, context);
      }

      if (pathname.startsWith('/sync/')) {
        return await handleProxy(request, context);
      }

      // Default: camouflage page
      return getCamouflageResponse();
    } catch (error: any) {
      console.error('Worker error:', error);
      return new Response(
        JSON.stringify({ error: 'Internal Server Error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  },
};

function getCamouflageResponse(): Response {
  const html = `<!DOCTYPE html>
<html>
<head>
    <title>Ubuntu - Community Documentation</title>
    <style>
        body { font-family: 'Ubuntu', 'Droid Sans', sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
        .header { background: #dd4814; color: white; padding: 20px; text-align: center; }
        .content { max-width: 1000px; margin: 20px auto; background: white; padding: 30px; border-radius: 5px; }
        h1 { margin-top: 0; }
    </style>
</head>
<body>
    <div class="header"><h1>Ubuntu Documentation</h1></div>
    <div class="content">
        <h1>Welcome to Ubuntu Community Documentation</h1>
        <p>Ubuntu is a free and open-source operating system for computers of all sizes.</p>
    </div>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
