import * as t from 'io-ts';

import { NODE_ENV } from '@condohub/common-utils';

export const NodeEnv = t.keyof({
  [NODE_ENV.DEVELOPMENT]: NODE_ENV.DEVELOPMENT,
  [NODE_ENV.TEST]: NODE_ENV.TEST,
  [NODE_ENV.PRODUCTION]: NODE_ENV.PRODUCTION,
});

export type NodeEnvType = t.TypeOf<typeof NodeEnv>;
