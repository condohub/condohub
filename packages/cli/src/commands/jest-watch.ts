import { spawnSync } from 'child_process';

import { Command, flags } from '@oclif/command';

import { getShellForPlatform } from '@condohub/node-utils';

import { debugInstance, enableDebug, NS } from '../utilities/log.utilities';

export default class JestWatch extends Command {
  log = debugInstance(`${NS}:jest`);
  logWarn = debugInstance(`${NS}:jest:warn`);
  logError = debugInstance(`${NS}:jest:error`);

  static description = 'Shortcut to run jest with typescript (ts-node)';

  static examples = [`$ nr jest`];

  static args = [{ name: 'args' }];

  static flags = {
    config: flags.string({ description: 'path to jest config file', default: 'jest.config.ts' }),
  };

  async run() {
    enableDebug();

    const { args, flags } = this.parse(JestWatch);

    const command = [
      `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
      `${flags.config ? '--config ' + flags.config : ''}`,
      `${args.args || '--watch'}`,
    ].join(' ');

    this.log(`running: ${command}`);

    const cmd = spawnSync(command, {
      shell: getShellForPlatform(),
      stdio: ['inherit', 'inherit', 'inherit'], // jest only uses stderr as output https://github.com/facebook/jest/issues/5064
      env: process.env,
    });
  }
}
