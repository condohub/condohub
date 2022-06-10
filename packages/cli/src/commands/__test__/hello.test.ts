import Hello from '../hello';

describe('hello', () => {
  it('should print "hello"', async () => {
    let stdout = jest.spyOn(process.stdout, 'write');

    await Hello.run([]);
    expect(stdout).toHaveBeenCalledTimes(1);
    expect(stdout).toHaveBeenCalledWith(`hello\n`);
  });
});
