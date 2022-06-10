// @ts-check

/// <reference types="@condohub/jest-config/types/jest-options" />

import { puppeteerPreset } from '@condohub/jest-config';

import jestConfig from './jest.config.js';
/** {jest.InitialOptions} */
const config = {
  ...puppeteerPreset,
  ...jestConfig,
  testMatch: ['**/(src|test)/**/?(*.)+(suite).ts?(x)'],
};

export default config;
