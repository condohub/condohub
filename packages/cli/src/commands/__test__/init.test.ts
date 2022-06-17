import { expect, test } from '@oclif/test';

describe('the "config init" command', () => {
  test
    .stdout()
    .command(['config init'])
    .it('should output the CLI greetings', (context) => {
      expect(context.stdout).contain('CondoHub CLI');
    });
});
