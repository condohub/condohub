// @ts-check
// tslint:disable:readonly-array
/** @type {Partial<jest.InitialOptions>} */
module.exports.puppeteerPreset = {
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
};
