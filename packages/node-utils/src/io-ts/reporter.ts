/**
 * Custom io-ts Reporter
 *
 * @see adapted from https://github.com/gcanti/io-ts/blob/e9a608ee54485a8d6a44e49f22e682eb1fbea6eb/src/PathReporter.ts
 */

import { fold } from 'fp-ts/lib/Either';
import { Context, getFunctionName, ValidationError } from 'io-ts';
import { Reporter } from 'io-ts/lib/Reporter';

function stringify(v: any): string {
  if (typeof v === 'function') {
    return getFunctionName(v);
  }
  if (typeof v === 'number' && !isFinite(v)) {
    if (isNaN(v)) {
      return 'NaN';
    }
    return v > 0 ? 'Infinity' : '-Infinity';
  }
  return JSON.stringify(v);
}

function getContextPath(context: Context): string {
  const length = context.length;
  const lastEntry = context[length - 1];
  return `${lastEntry.key} of type ${lastEntry.type.name}\n`;
}

function getMessage(e: ValidationError): string {
  return e.message !== undefined
    ? e.message
    : `Invalid value (${stringify(e.value)}) for ${getContextPath(e.context)}`;
}

export function failure(es: Array<ValidationError>): Array<string> {
  return es.map(getMessage);
}

export function success(): Array<string> {
  return ['No errors!'];
}

export const PathReporter: Reporter<Array<string>> = {
  report: fold(failure, success),
};
