import * as t from 'io-ts';

import { DEPLOY_ENV, TEST_ENV } from '@condohub/common-utils';

import { TextBoolean } from './boolean-env';
import { DebugEnv } from './debug-env';

/**
 * Our deploy environment values
 */
const DeployEnv = t.keyof({
  [DEPLOY_ENV.LOCAL]: DEPLOY_ENV.LOCAL,
  [DEPLOY_ENV.DEV]: DEPLOY_ENV.DEV,
  [DEPLOY_ENV.STAGING]: DEPLOY_ENV.STAGING,
  [DEPLOY_ENV.PRODUCTION]: DEPLOY_ENV.PRODUCTION,
});

/**
 * Test environment value, used to set tests to mock environments or do specific things when running
 * on CI/CD
 */
const TestEnv = t.keyof({
  [TEST_ENV.LOCAL]: TEST_ENV.LOCAL,
  [TEST_ENV.CI]: TEST_ENV.CI,
});

/**
 * Typed representation of the .env files. All apps and sites should
 * use this type as a base for their .env file.
 */
export const CommonEnv = t.intersection([
  DebugEnv,
  t.type({
    /**
     * Deploy environment
     */
    APP_ENV: DeployEnv,
    /**
     * Domain for the app, api, or website
     * @example website
     */
    APP_DOMAIN: t.string,
    /**
     * Subdomain for the app, api, or website
     * @example "" in "website.com"
     * @example "api" in "api.website.com"
     * @example "app" in "dev.app.website.com"
     */
    APP_SUBDOMAIN: t.string,
  }),
  t.partial({
    /**
     * Branch subdomain a specific build
     * @example "" in "website.com"
     * @example "" in "api.website.com"
     * @example "dev" in "dev.app.website.com"
     * @example "pr-422" in "pr-422.app.website.com"
     */
    APP_BRANCH_SUBDOMAIN: t.string,
    /**
     * Protocol used for apps e.g. http in local, https elsewhere
     * @example http, https
     * @default https
     */
    APP_PROTOCOL: t.string,
    /**
     * Application host
     * @example website.com, api.website.com
     * @default localhost
     */
    APP_HOST: t.string,
    /**
     * Local port
     * @default 443
     */
    APP_PORT: t.string,
    /**
     * Whether the app will be deployed or not
     */
    APP_CI_DEPLOY: TextBoolean,
    /**
     * Test environment
     */
    TEST_ENV: TestEnv,
  }),
]);

export type CommonEnvType = t.TypeOf<typeof CommonEnv>;
