// tslint:disable:readonly-array
export const puppeteerPreset: Partial<jest.DefaultOptions & jest.InitialOptions> = {
  globalSetup: 'jest-environment-puppeteer/setup',
  globalTeardown: 'jest-environment-puppeteer/teardown',
  testEnvironment: 'jest-environment-puppeteer',
  setupFilesAfterEnv: ['expect-puppeteer'],
};
