import * as t from 'io-ts';

import { NODE_ENV } from '@condohub/common-utils';

/**
 * Standard NodeJS NODE_ENV values.
 */
const NodeEnv = t.keyof({
  [NODE_ENV.DEVELOPMENT]: NODE_ENV.DEVELOPMENT,
  [NODE_ENV.TEST]: NODE_ENV.TEST,
  [NODE_ENV.PRODUCTION]: NODE_ENV.PRODUCTION,
});

export const DebugEnv = t.partial({
  /**
   * The NodeJS environment
   */
  NODE_ENV: NodeEnv,
  /**
   * NodeJS internal debug env variable
   * @see https://nodejs.org/api/cli.html#cli_node_debug_module
   */
  NODE_DEBUG: t.string,
  /**
   * NodeJS internal options env variable
   * @see https://nodejs.org/api/cli.html#cli_node_options_options
   * @example NODE_OPTIONS='--max-old-space-size=4096'
   */
  NODE_OPTIONS: t.string,
  /**
   * NodeJS internal env to silence process deprecation warnings
   * @see https://nodejs.org/api/cli.html#cli_node_no_warnings_1
   * @example NODE_NO_WARNINGS=1
   */
  NODE_NO_WARNINGS: t.string,
  /**
   * Debug env variable to enable output in the console, based on the namespace set
   * @see https://github.com/visionmedia/debug for documentation
   */
  DEBUG: t.string,
});
