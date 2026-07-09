/**
 * Dashboard Routes Handler
 */

import type { WorkerContext } from '../types';
import { STATUS } from '../constants';

export async function handleDashboard(
  request: Request,
  context: WorkerContext
): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Dashboard main page
  if (
    pathname === '/panel/dashboard' ||
    pathname === '/dashboard' ||
    pathname === '/panel/'
  ) {
    return new Response(getDashboardHTML(), {
      status: STATUS.OK,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  }

  return new Response(getDashboardHTML(), {
    status: STATUS.OK,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

function getDashboardHTML(): string {
  return `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bardia - Dashboard</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f7fa; color: #333; }
        .navbar { background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 20px 30px; display: flex; justify-content: space-between; align-items: center; }
        .navbar h1 { color: #667eea; }
        .container { max-width: 1200px; margin: 30px auto; padding: 0 20px; }
        .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .card { background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .card h2 { margin-bottom: 15px; color: #667eea; }
        .stat { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee; }
        .stat:last-child { border-bottom: none; }
        .stat-value { font-size: 24px; font-weight: bold; color: #667eea; }
        .btn { padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px; width: 100%; }
        .btn:hover { background: #5568d3; }
    </style>
</head>
<body>
    <div class="navbar">
        <h1>🔐 Bardia Dashboard</h1>
        <div>v1.0.0</div>
    </div>
    <div class="container">
        <div class="dashboard-grid">
            <div class="card">
                <h2>📊 Statistics</h2>
                <div class="stat">
                    <span>Total Requests</span>
                    <span class="stat-value">0</span>
                </div>
                <div class="stat">
                    <span>Active Users</span>
                    <span class="stat-value">0</span>
                </div>
                <div class="stat">
                    <span>Bandwidth</span>
                    <span class="stat-value">0 B</span>
                </div>
            </div>
            <div class="card">
                <h2>⚙️ System Status</h2>
                <div class="stat">
                    <span>Status</span>
                    <span class="stat-value">✅</span>
                </div>
                <div class="stat">
                    <span>Database</span>
                    <span class="stat-value">✅</span>
                </div>
                <div class="stat">
                    <span>Version</span>
                    <span class="stat-value">1.0.0</span>
                </div>
            </div>
            <div class="card">
                <h2>🚀 Quick Actions</h2>
                <button class="btn">View Analytics</button>
                <button class="btn" style="background: #764ba2; margin-top: 5px;">Settings</button>
            </div>
        </div>
    </div>
</body>
</html>`;
}
