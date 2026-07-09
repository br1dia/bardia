/**
 * Bardia - Global Constants
 */

export const VERSION = '1.0.0';
export const APP_NAME = 'Bardia';
export const DESCRIPTION = 'Advanced Traffic Intelligence Gateway';

export const DEFAULT_CONFIG = {
  masterPassword: 'admin',
  apiRoute: 'api',
  proxyRoute: 'sync',
  adminPath: 'panel',
  deviceUuid: '',
  primaryMode: 'both' as const,
  killSwitch: false,
  analyticsEnabled: true,
};

export const STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  RATE_LIMITED: 429,
  INTERNAL_ERROR: 500,
};

export const ERRORS = {
  AUTH_REQUIRED: 'Authentication required',
  INVALID_TOKEN: 'Invalid authentication token',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  INVALID_INPUT: 'Invalid input parameters',
  DATABASE_ERROR: 'Database operation failed',
};

export const RATE_LIMIT = {
  DEFAULT: 100,
  STRICT: 10,
  RELAXED: 1000,
};

export const PROTOCOL = {
  VLESS: 'vless',
  TROJAN: 'trojan',
};
