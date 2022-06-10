import { Command } from '@oclif/command';

export default class Auth extends Command {
  static description = 'Authenticate CLI instance';

  static examples = [`$ ch auth`];

  static args = [{ name: 'args' }];

  async run() {
    const { args } = await this.parse(Auth);

    this.log(`running in ${process.cwd()}`);
  }
}
