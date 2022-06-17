import { spawnSync } from 'child_process';

import { Command } from '@oclif/core';

import { getShellForPlatform } from '@condohub/node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities';

export default class Depcheck extends Command {
  log = debugInstance(`${NS}:depcheck`);
  logWarn = debugInstance(`${NS}:depcheck:warn`);
  logError = debugInstance(`${NS}:depcheck:error`);

  static description = 'Shortcut to run depcheck';

  static examples = [`$ nr depcheck`];

  static args = [{ name: 'args' }];

  async run() {
    enableDebug();

    const { args } = await this.parse(Depcheck);

    this.log(`running in ${process.cwd()}`);

    const command = spawnSync(`npm exec depcheck ${args.args || ''}`, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'pipe', 'pipe'],
      env: process.env,
    });

    if (command.stdout.toString().length) {
      if (/Missing/gi.test(command.stdout.toString())) {
        this.error(command.stdout.toString());
      }

      if (/Unused/gi.test(command.stdout.toString())) {
        this.logWarn(command.stdout.toString());
        return;
      }

      this.log(command.stdout.toString());
    }

    if (command.stderr.toString().length) {
      if (/DeprecationWarning/gi.test(command.stderr.toString())) {
        return;
      }
      this.logError(command.stderr.toString());
      this.error(command.stderr.toString());
    }
  }
}
