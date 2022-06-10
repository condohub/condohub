import * as t from 'io-ts';

import { TextBoolean } from '../env/boolean-env';

/**
 * Typed representation of the .env file for Gatsby sites.
 */
export const CommonEnvGatsby = t.partial({
  /**
   * Override the cache setting (see core-gastby-plugin-ts-cache plugin)
   */
  GATSBY_ENABLE_CACHE: TextBoolean,
  /**
   * @see https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
   */
  GATSBY_EXPERIMENTAL_FAST_DEV: TextBoolean,
  GATSBY_EXPERIMENTAL_DEV_SSR: TextBoolean,
  GATSBY_EXPERIMENTAL_QUERY_ON_DEMAND: TextBoolean,
  GATSBY_EXPERIMENTAL_LAZY_IMAGES: TextBoolean,
  GATSBY_EXPERIMENTAL_PRESERVE_WEBPACK_CACHE: TextBoolean,
  GATSBY_EXPERIMENTAL_PRESERVE_FILE_DOWNLOAD_CACHE: TextBoolean,
  GATSBY_EXPERIMENTAL_PARALLEL_SOURCING: TextBoolean,
  GATSBY_EXPERIMENTAL_FUNCTIONS: TextBoolean,
  GATSBY_EXPERIMENTAL_LMDB_STORE: TextBoolean,
});

export type CommonEnvGatsbyType = t.TypeOf<typeof CommonEnvGatsby>;
