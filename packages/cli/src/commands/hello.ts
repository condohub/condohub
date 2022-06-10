import { Command } from '@oclif/command';

export default class Hello extends Command {
  static description = 'Dummy test command';
  static examples = [`$ condohub hello`];
  static args = [{ name: 'args' }];

  async run() {
    const { args } = await this.parse(Hello);
    this.log(`hello`);
  }
}
