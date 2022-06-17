import { Config } from '@oclif/core';

import BaseCommand from '../base-command';

export default class Init extends BaseCommand {
  static description = 'Create local .condohub config';

  static examples = [`$ condocli init`];

  static args = [{ name: 'test' }];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'init' });
  }

  async init() {
    let [id, ...argv] = this.argv;
  }

  async run() {
    const { args } = await this.parse(Init);

    this.logCommand(`running in ${process.cwd()}`);
  }
}
