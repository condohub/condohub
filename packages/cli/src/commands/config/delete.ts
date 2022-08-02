import { Config } from '@oclif/core';
import path from 'node:path';

import BaseCommand from '../../base-command';
import { deleteUserConfig, getUserConfigExists } from '../../utilities/config.utilities';

/**
 * Delete local user configuration
 */
export default class DeleteUserConfig extends BaseCommand {
  static description = 'Delete local .condohub config';

  static examples = [`$ condohub config delete`];

  static args = [{ name: 'test' }];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'config:delete' });
  }

  async run() {
    const { args } = await this.parse(DeleteUserConfig);
    const configPath = path.join(this.config.configDir, 'config.json');
    const userConfigExist = await getUserConfigExists(this.config);

    if (!userConfigExist) {
      this.logCommand(`no config.json found in ${configPath}`);
      this.logCommand(`nothing to delete`);
      return;
    }
    this.logCommand(`config.json found in ${configPath}`);
    await deleteUserConfig(this.config);
    this.logCommand(`config.json deleted successfully`);
  }
}
