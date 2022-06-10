/**
 * Standard deploy environments
 */
export enum DEPLOY_ENV {
  /**
   * LOCAL is for developers' machines
   */
  LOCAL = 'local',
  /**
   * DEV is for the development branch (`dev`) or any branches are are not STAGING
   * or PRODUCTION
   */
  DEV = 'dev',
  /**
   * STAGING is the preproduction environment, usually from the main/master branch
   */
  STAGING = 'staging',
  /**
   * PRODUCTION is based on the release branch with production data (e.g. in published state)
   */
  PRODUCTION = 'production',
}

/**
 * Standard NodeJS Environments
 */
export enum NODE_ENV {
  DEVELOPMENT = 'development',
  TEST = 'test',
  PRODUCTION = 'production',
}

/**
 * Testing environment
 */
export enum TEST_ENV {
  LOCAL = 'LOCAL',
  CI = 'CI',
}
