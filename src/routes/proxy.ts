/**
 * Proxy Routes Handler
 */

import type { WorkerContext } from '../types';
import { STATUS } from '../constants';

export async function handleProxy(
  request: Request,
  context: WorkerContext
): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Subscription endpoint
  if (pathname.startsWith('/sync/sub')) {
    return new Response(
      JSON.stringify({
        error: 'Subscription endpoint - implementation pending',
      }),
      {
        status: STATUS.OK,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  // Default proxy page
  return new Response(getCamouflageHTML(), {
    status: STATUS.OK,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

function getCamouflageHTML(): string {
  return `<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f0f0f0; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: 50px auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #333; }
        p { color: #666; line-height: 1.6; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome</h1>
        <p>This is a standard web server. If you're seeing this page, the service is running normally.</p>
    </div>
</body>
</html>`;
}
