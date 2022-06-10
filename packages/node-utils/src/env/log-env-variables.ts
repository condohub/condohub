import debug from 'debug';

import { CommonEnvType } from './common-env.js';

const log = debug('nr:env');

export function logEnvVariables<ENV extends CommonEnvType | Record<string, any>>({
  packageName,
  env,
  debugFn,
}: {
  packageName: string;
  env: Partial<ENV>;
  debugFn?: debug.Debugger;
}) {
  const logPackage = debugFn
    ? debugFn.extend(packageName.replace('@newrade/', ''))
    : log.extend(packageName.replace('@newrade/', ''));

  logPackage(`NODE_ENV is ${env.NODE_ENV}`);
  logPackage(`NODE_DEBUG is ${env.NODE_DEBUG}`);
  logPackage(`NODE_OPTIONS is ${env.NODE_OPTIONS}`);
  logPackage(`NODE_NO_WARNINGS is ${env.NODE_NO_WARNINGS}`);
  logPackage(`DEBUG is ${env.DEBUG}`);
  logPackage(`APP_ENV is ${env.APP_ENV}`);
  logPackage(`APP_PROTOCOL is ${env.APP_PROTOCOL}`);
  logPackage(`APP_HOST is ${env.APP_HOST}`);
  logPackage(`APP_PORT is ${env.APP_PORT}`);
  logPackage(`DEBUG is ${env.DEBUG}`);
}
