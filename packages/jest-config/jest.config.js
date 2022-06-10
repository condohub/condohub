// @ts-check

/// <reference types="@condohub/jest-config/types/jest-options" />

import { baseJestConfig } from '@condohub/jest-config';
/** {jest.InitialOptions} */
const config = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};

export default config;
