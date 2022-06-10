import * as t from 'io-ts';

export const TextBoolean = t.keyof({
  true: 'true',
  false: 'false',
});

export function toBoolean(bool?: string | null | boolean): boolean {
  if (bool === 'true') {
    return true;
  }

  if (bool === 'false') {
    return false;
  }

  return false;
}
