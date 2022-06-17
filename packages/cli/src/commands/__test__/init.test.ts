import { expect, test } from '@oclif/test';

describe('the "init" command', () => {
  test
    .stdout()
    .command(['init'])
    .it('should output the CLI greetings', (context) => {
      expect(context.stdout).contain('CondoHub CLI');
    });
});
