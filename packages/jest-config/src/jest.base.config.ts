import fs from 'fs';

import { includedLibToCompile } from './included-libs.js';

export const baseJestConfig: jest.InitialOptions & { extensionsToTreatAsEsm?: string[] } = {
  // see https://jestjs.io/docs/configuration#extensionstotreatasesm-arraystring
  preset: 'ts-jest',
  modulePaths: ['../../<rootDir>/node_modules', '<rootDir>/node_modules', '<rootDir>'],
  rootDir: '.',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '\\.(t|j)sx?$': '@swc/jest',
    // '\\.(ttf|eot|woff2?|svg|jpe?g|png|gif|ico)$': './transforms/file-transform.js',
    // '\\.(mdx?)$': './transforms/mdx-transform.js',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  transformIgnorePatterns: [`node_modules/(?!(${includedLibToCompile.join('|')})/)`],
  moduleNameMapper: {
    // '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(less|sass|scss)$': 'identity-obj-proxy',
  },
  testRegex: '.+\\.test\\.tsx?',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/lib/',
    '(\\.js\\.map)$',
    '.snap',
    '<rootDir>/package.json',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/lib/',
    '(\\.js\\.map)$',
    '.snap',
    '<rootDir>/package.json',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node', 'mjs'],
  reporters: ['default', 'jest-junit'],
  coverageDirectory: '<rootDir>/_reports/',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      // see https://huafu.github.io/ts-jest/user/config/babelConfig
      babelConfig: './transforms/babel-test.config.js',
      // see https://huafu.github.io/ts-jest/user/config/diagnostics
      diagnostics: {
        ignoreCodes: [2322],
      },
    },
  },
};
