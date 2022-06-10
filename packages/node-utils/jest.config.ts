/// <reference types="@newrade/core-types/src/jest-options" />

import { baseJestConfig } from '@newrade/core-jest-config';

const config: jest.InitialOptions = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};

export default config;
