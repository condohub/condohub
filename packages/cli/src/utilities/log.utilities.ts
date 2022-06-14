import debug from 'debug';

/**
 *
 * Debug
 *
 */

/**
 * CLI debug namespace
 */
export const NS = 'condohub:cli';

export const debugInstance = debug;

// there is an error with .extend in oclif, using separate debug instances instead
// always enable logging for the cli tools
export function enableDebug() {
  if (!process.env.DEBUG) {
    debugInstance.enable('condohub:cli*');
  }

  /**
   * Enable default logging
   */
  if (process.env.DEBUG) {
    debugInstance.enable(process.env.DEBUG);
  }
}

/**
 *
 * Normal logging
 *
 */

export function logCommand(message?: string, ...args: any[]) {
  console.log(`－  ${message}`);
}

export function log(message?: string, ...args: any[]) {
  console.log(`🏠  ${message}`);
}

export function warn(input: string | Error): string | Error {
  if (input instanceof Error) {
    console.log(`🏠  ${input}`);
    return input;
  }

  console.warn(`🏠  ${input}`);
}
