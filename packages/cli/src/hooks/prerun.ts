import { Hook } from '@oclif/core';

import { log } from '../utilities/log.utilities';

/**
 * @see https://oclif.io/docs/hooks
 */
const hook: Hook<'prerun'> = async function (opts) {
  log(`Running command "${opts.Command.name.toLowerCase()}"`);
};

export default hook;
