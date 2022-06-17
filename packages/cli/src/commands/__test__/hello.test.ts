import { expect, test } from '@oclif/test';

describe('the "hello" command', () => {
  test
    .stdout()
    .command(['hello'])
    .it('should output "hello"', (context) => {
      expect(context.stdout).contain('hello');
    });

  test
    .stdout()
    .command(['hello', 'world'])
    .it('should output "hello world"', (context) => {
      expect(context.stdout).contain('hello world');
    });
});
