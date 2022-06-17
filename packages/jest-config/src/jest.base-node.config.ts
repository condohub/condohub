import type { Config } from '@jest/types';

import { baseJestConfig } from './jest.base.config.js';

export const baseJestNodeConfig: Config.InitialOptions = {
  ...baseJestConfig,
  testEnvironment: 'node',
};
