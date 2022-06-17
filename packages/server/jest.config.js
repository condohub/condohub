// @ts-check

/// <reference types="@jest/types" />

import { baseJestConfig } from '@condohub/jest-config';
/** @type {import('ts-jest').InitialOptionsTsJest} */
const config = {
  ...baseJestConfig,
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
};

export default config;
