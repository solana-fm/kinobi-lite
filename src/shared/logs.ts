/* eslint-disable no-console */

const DEFAULT_LOG_LEVEL = 'info';
export const LOG_LEVELS = ['debug', 'trace', 'info', 'warn', 'error'] as const;
export type LogLevel = typeof LOG_LEVELS[number];

export const logError = (message: string, hint?: string): void => {
  if (!shouldLogLevel('error')) return;
  logMessageAndHint(`${message}`, hint);
};

export const logWarn = (message: string, hint?: string): void => {
  if (!shouldLogLevel('warn')) return;
  logMessageAndHint(`${message}`, hint);
};

export const logInfo = (message: string, hint?: string): void => {
  if (!shouldLogLevel('info')) return;
  logMessageAndHint(`${message}`, hint);
};

export const logTrace = (message: string, hint?: string): void => {
  if (!shouldLogLevel('trace')) return;
  logMessageAndHint(`${message}`, hint);
};

export const logDebug = (message: string, debug?: any, hint?: string): void => {
  if (!shouldLogLevel('debug')) return;
  logMessageAndHint(`${message}`, hint, false);

  if (debug !== undefined) console.log(debug);
  console.log('\n');
};

export const getLevelIndex = (level: LogLevel): number =>
  LOG_LEVELS.indexOf(level);

export const shouldLogLevel = (level: LogLevel): boolean =>
  getLevelIndex(level) >= getLevelIndex(getMinLogLevel());

const getMinLogLevel = (): LogLevel => {
  const level = process.env.LOG;
  if (level && LOG_LEVELS.includes(level as LogLevel)) {
    return level as LogLevel;
  }
  return DEFAULT_LOG_LEVEL;
};

const logMessageAndHint = (
  message: string,
  hint?: string,
  lineJump = true
): void => {
  console.log(message + getDimmedHint(hint) + (lineJump ? '\n' : ''));
};

const getDimmedHint = (hint?: string, prefix = '|> '): string => {
  if (!hint) return '';
  const hintArray = (hint ?? '').split('\n').filter((line) => !!line);
  return hintArray.join(' ');
};
