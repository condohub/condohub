import { Command, Config } from '@oclif/core';
import debug from 'debug';

import { debugInstance, log, logCommand, NS, warn } from './utilities/log.utilities';

export default class BaseCommand extends Command {
  log = log;
  logCommand = logCommand;
  warn = warn;

  logDebug: debug.Debugger = debugInstance(`${NS}:condohub`);
  logWarnDebug: debug.Debugger = debugInstance(`${NS}:condohub:warn`);
  logErrorDebug: debug.Debugger = debugInstance(`${NS}:condohub:error`);

  constructor(argv: string[], config: Config, commandConfig?: { name?: string }) {
    super(argv, config);
    if (commandConfig?.name) {
      this.logDebug = debugInstance(`${NS}:${commandConfig.name}`);
      this.logWarnDebug = debugInstance(`${NS}:${commandConfig.name}:warn`);
      this.logErrorDebug = debugInstance(`${NS}:${commandConfig.name}:error`);
    }
  }

  async run() {}
}
