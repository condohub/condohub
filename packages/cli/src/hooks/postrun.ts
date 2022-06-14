import { Hook } from '@oclif/core';

import { log } from '../utilities/log.utilities';

/**
 * @see https://oclif.io/docs/hooks
 */
const hook: Hook<'postrun'> = async function (opts) {
  log(`Finished.`);
};

export default hook;
