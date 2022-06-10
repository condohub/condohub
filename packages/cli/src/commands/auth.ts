import { spawnSync } from 'child_process';

import { Command } from '@oclif/command';

import { getShellForPlatform } from '../utilities/cmd.utilities';
import { debugInstance, enableDebug, NS } from '../utilities/log.utilities';

export default class Auth extends Command {
  log = debugInstance(`${NS}:auth`);
  logWarn = debugInstance(`${NS}:auth:warn`);
  logError = debugInstance(`${NS}:auth:error`);

  static description = 'Authenticate CLI instance';

  static examples = [`$ ch auth`];

  static args = [{ name: 'args' }];

  async run() {
    enableDebug();

    const { args } = this.parse(Auth);

    this.log(`running in ${process.cwd()}`);

    const command = spawnSync(`echo ok ${args.args || ''}`, {
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
