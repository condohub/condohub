import { resolve } from 'path';

import { Command } from '@oclif/core';
// @ts-ignore
import { Listr } from 'listr2';

import { debugInstance, enableDebug, NS } from '../../utilities/log.utilities';

interface Ctx {
  /* some variables for internal use */
}

export default class Auth extends Command {
  log = debugInstance(`${NS}:auth`);
  logWarn = debugInstance(`${NS}:auth:warn`);
  logError = debugInstance(`${NS}:auth:error`);

  static description = 'Auth command';

  static examples = [`$ condocli auth`];

  static args = [{ name: 'test' }];

  async init() {
    let [id, ...argv] = this.argv;
  }

  async run() {
    const { args } = await this.parse(Auth);

    const tasks = new Listr<Ctx>(
      [
        {
          title: '  This task will execute.',
          task: (ctx, task): Listr =>
            task.newListr([
              {
                title: '  This is a subtask.',
                task: async (): Promise<string> => {
                  return new Promise((resolve, reject) => {
                    setTimeout(() => {
                      resolve('Done');
                    }, 3000);
                  });
                },
              },
            ]),
        },
      ],
      {
        rendererOptions: {
          showTimer: true,
          indentation: 2,
        },
        /* options */
      }
    );
    try {
      await tasks.run();
    } catch (e) {
      console.error(e);
    }
  }
}
