import * as t from 'io-ts';

import { DebugEnv } from './debug-env';
import { DeployEnv } from './deploy-env';

/**
 * Typed representation of the .env files. All Figma plugin should
 * use this type as a base for their .env file.
 */
export const FigmaEnv = t.intersection([
  DebugEnv,
  t.type({
    /**
     * Deploy environment
     */
    APP_ENV: DeployEnv,
  }),
]);

export type FigmaEnvType = t.TypeOf<typeof FigmaEnv>;
