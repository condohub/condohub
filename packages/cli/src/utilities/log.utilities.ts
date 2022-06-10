import debug from 'debug';

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
