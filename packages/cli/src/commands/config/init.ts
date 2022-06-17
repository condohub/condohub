import { Config } from '@oclif/core';
import path from 'node:path';

import BaseCommand from '../../base-command';
import {
  createUserConfig,
  getUserConfig,
  updateUserConfig,
} from '../../utilities/config.utilities';

/**
 * Handles local user configuration
 *
 * @see https://oclif.io/docs/config
 */
export default class InitUserConfig extends BaseCommand {
  static description = 'Init local .condohub config';

  static examples = [`$ condohub config init`];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'config:init' });
  }

  async run() {
    const { args } = await this.parse(InitUserConfig);
    const configPath = path.join(this.config.configDir, 'config.json');
    const userConfigExist = await getUserConfig(this.config);

    if (!userConfigExist) {
      this.logCommand(`no config.json found in ${configPath}`);
      const userConfig = await createUserConfig(this.config);
      this.logCommand(`config.json created successfully`);
      return;
    }
    this.logCommand(`config.json found in ${configPath}`);
    const userConfig = await updateUserConfig(this.config);
    this.logCommand(`config.json updated successfully`);
  }
}
