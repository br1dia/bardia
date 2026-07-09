/**
 * Bardia - Type Definitions
 */

export interface Config {
  masterPassword: string;
  apiRoute: string;
  proxyRoute: string;
  deviceUuid: string;
  primaryMode: 'alpha' | 'beta' | 'both';
  killSwitch: boolean;
  analyticsEnabled: boolean;
}

export interface User {
  id: string;
  uuid: string;
  name: string;
  email?: string;
  role: 'admin' | 'user';
  createdAt: Date;
  lastActive: Date;
  isActive: boolean;
}

export interface Rule {
  id: string;
  name: string;
  enabled: boolean;
  priority: number;
  condition: RuleCondition;
  action: RuleAction;
  createdAt: Date;
}

export interface RuleCondition {
  type: 'ip' | 'domain' | 'path' | 'method';
  operator: 'equals' | 'contains' | 'regex';
  value: string | string[];
}

export interface RuleAction {
  type: 'allow' | 'block' | 'redirect' | 'rate_limit';
  target?: string;
  status?: number;
}

export interface RequestMetrics {
  timestamp: Date;
  method: string;
  path: string;
  status: number;
  latency: number;
  bytesIn: number;
  bytesOut: number;
  clientIp: string;
}

export interface AnalyticsData {
  totalRequests: number;
  totalBytes: number;
  averageLatency: number;
  errorRate: number;
}

export interface ActivityLog {
  id: string;
  timestamp: Date;
  type: 'login' | 'config_change' | 'rule_update' | 'error';
  userId?: string;
  details: Record<string, any>;
  severity: 'info' | 'warning' | 'error';
}

export interface WorkerContext {
  env: {
    DB: D1Database;
    [key: string]: any;
  };
  ctx?: ExecutionContext;
}
