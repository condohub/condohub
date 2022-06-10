import path from 'path';

import prettier from 'prettier';

export function format(source: string, options?: prettier.Options, configPath?: string): string {
  const prettierOptions = options
    ? options
    : prettier.resolveConfig(configPath ? configPath : path.join(process.cwd(), '.prettierrc'), {
        useCache: false,
        editorconfig: true,
      });

  return prettier.format(source, {
    ...prettierOptions,
    parser: 'json-stringify',
  });
}
