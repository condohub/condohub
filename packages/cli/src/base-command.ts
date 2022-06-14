import { Command } from '@oclif/core';

import { log, logCommand, warn } from './utilities/log.utilities';

export default class BaseCommand extends Command {
  log = log;
  logCommand = logCommand;
  warn = warn;

  async run() {}
}
