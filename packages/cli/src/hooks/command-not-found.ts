import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { prompt } from 'inquirer';

const hook: Hook.CommandNotFound = async function ({ config, argv }) {
  this.log(`${argv} was not found`);
  const { command } = await prompt<{ command: string }>([
    {
      name: 'command',
      type: 'list',
      message: 'Which of these commands would you like to run?',
      choices: config.commands.map((p) => toConfiguredId(p.id, config)),
    },
  ]);

  if (argv?.includes('--help') || argv?.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
