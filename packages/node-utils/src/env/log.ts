import chalk from 'chalk';
import debug from 'debug';

export function scriptLog(message: string) {
  console.log(`${chalk.blue(`[scripts]`)} ${message}`);
}

export enum LOG_LEVEL {
  INFO,
  ERROR,
}

const debugLogging = debug('newrade');

export function log(
  message: string,
  {
    chalkColor = 'yellow',
    toolName,
    noNewline,
    level = LOG_LEVEL.INFO,
  }: { chalkColor?: string; toolName: string; noNewline?: boolean; level?: LOG_LEVEL }
) {
  const errorTemplate = `${chalk.red(message)}`;
  const infoTemplate = `${message}`;
  const usedTemplate = level === LOG_LEVEL.INFO ? infoTemplate : errorTemplate;

  debugLogging.extend(toolName.replace('@newrade/', ''))(usedTemplate);

  if (noNewline) {
    process.stdout.write(usedTemplate);
    return;
  }
}
