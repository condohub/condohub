import * as t from 'io-ts';

import { CommonEnv } from '@condohub/node-utils';

/**
 * Local, typed representation of the .env file.
 */
export const Env = t.intersection([CommonEnv, t.partial({})]);

export type ENV = t.TypeOf<typeof Env>;
