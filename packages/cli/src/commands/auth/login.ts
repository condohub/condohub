import { resolve } from 'path';

import { Command, Config } from '@oclif/core';
// @ts-ignore
import { Listr } from 'listr2';
import fs from 'node:fs/promises';

import { getAuthorizedClient } from '@condohub/apis';
import { AppError, ERROR_TYPE } from '@condohub/common-utils';

import BaseCommand from '../../base-command';
import { getUserConfig } from '../../utilities/config.utilities';
import { debugInstance, enableDebug, NS } from '../../utilities/log.utilities';

interface Ctx {
  /* some variables for internal use */
}

export default class AuthLogin extends BaseCommand {
  static description = 'Authenticate your CLI client';

  static examples = [`$ condohub auth login`];

  static args = [{ name: 'test' }];

  constructor(argv: string[], config: Config) {
    super(argv, config, { name: 'auth:login' });
  }

  async init() {
    let [id, ...argv] = this.argv;
  }

  async run() {
    const { args } = await this.parse(AuthLogin);

    let credentials: string;
    try {
      getUserConfig(this.config);
    } catch (error) {
      throw new AppError({
        name: ERROR_TYPE.ENV_ERROR,
        message: 'Missing credentials.json file',
      });
    }

    // try {
    //   const client = getAuthorizedClient();
    // } catch (error) {}

    // try {
    //   const client = getAuthorizedClient();
    // } catch (error) {}

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

    this.log(`running in ${process.cwd()}`);
  }
}
