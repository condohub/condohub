import BaseCommand from '../base-command';

export default class Hello extends BaseCommand {
  static description = 'Test command to verify that the CLI build is valid.';
  static examples = [`$ condohub hello world`];
  static args = [{ name: 'word' }];

  async run() {
    const { args } = await this.parse<any, { word: any }>(Hello);
    if (args.word) {
      this.logCommand(`hello ${args.word}`);
      return;
    }
    this.logCommand(`hello`);
  }
}
