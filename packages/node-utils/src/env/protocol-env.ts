import * as t from 'io-ts';

export const Protocol = t.keyof({
  http: 'http',
  https: 'https',
});
