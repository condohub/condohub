import path from 'path';

import chalk from 'chalk';
import debug from 'debug';
import * as dotenv from 'dotenv';
import * as t from 'io-ts';

import { AppError, ERROR_TYPE } from '@condohub/common-utils';

import { PathReporter } from '../io-ts/reporter.js';

import { CommonEnvType } from './common-env.js';
import { logEnvVariables } from './log-env-variables.js';

const log = debug('nr:env');

/**
 * Utility function to load the .env files in the monorepository.
 *
 * By default it loads the package's .env file (e.g. in `packages/<package-name>/.env`) and the parent .env file
 * (`<root>/.env`) which contains variables for the whole repository.
 *
 * It also validates .env files according to a io-ts schema.
 *
 * @see https://github.com/motdotla/dotenv#readme
 * @see https://github.com/gcanti/io-ts/blob/master/index.md
 */
export function loadDotEnv<ENV = CommonEnvType>({
  schema,
  dotEnvPath,
  dotEnvRootPath = path.resolve(__dirname, '..', '..', '..', '.env'),
  packageName,
  printEnvVariables = false,
  logging = true,
}: {
  schema: t.IntersectionC<any>;
  dotEnvPath: string;
  dotEnvRootPath?: string;
  packageName: string;
  printEnvVariables?: boolean;
  logging?: boolean;
}) {
  const logEnv = log.extend(packageName.replace('@condohub/', ''));
  const logEnvError = logEnv.extend('error');

  /**
   * Loads project .env file
   */
  dotenv.config({
    path: dotEnvPath,
  });

  /**
   * Loads repo root .env file
   */
  dotenv.config({
    path: dotEnvRootPath,
  });

  /**
   * Enable default logging
   */
  console.log(process.env.DEBUG);
  if (process.env.DEBUG) {
    debug.enable(process.env.DEBUG);
  }
  if (!process.env.DEBUG) {
    debug.enable('nr:env*');
  }

  if (logging) {
    logEnv(`read .env files in ${dotEnvPath}`);
    logEnv(`read .env files in ${dotEnvRootPath}`);
    logEnv(`validating .env files...`);
  }

  /**
   * Validate if .env satisfies the passed schema with io-ts
   */
  const dotEnvConfig = schema;
  const result = dotEnvConfig.decode(process.env);
  const report = PathReporter.report(result);

  if (report && report.length && !report[0].includes('No errors')) {
    if (logging) {
      report.map((reason: string) => {
        console.error(`${reason}`);
      });
    }

    console.warn('check for required entries in environment variables (e.g. .env file)');

    throw new AppError({
      name: ERROR_TYPE.APP_ERROR,
      message: `Invalid dot env`,
    });
  }

  if (logging) {
    logEnv(`.env files is ${chalk.green('valid')}`);

    if (printEnvVariables) {
      logEnvVariables<any>({ packageName, env: process.env as any as ENV, debugFn: log });
    }
  }

  return process.env as any as ENV;
}
