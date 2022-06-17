import { Config } from '@oclif/core';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { AppError, ERROR_TYPE } from '@condohub/common-utils';

export type UserConfig = {
  accessToken?: string;
};

export async function getUserConfig(config: Config) {
  let userConfigExists = false;
  try {
    userConfigExists = fs.existsSync(path.join(config.configDir, 'config.json'));
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when reading config.json',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }

  return userConfigExists;
}

export async function createUserConfig(config: Config, userConfig?: UserConfig) {
  try {
    const initialUserConfig: UserConfig = {
      accessToken: '',
    };
    await fsp.mkdir(path.join(config.configDir), {
      recursive: true,
    });
    await fsp.writeFile(
      path.join(config.configDir, 'config.json'),
      JSON.stringify(initialUserConfig, null, 2)
    );
    return initialUserConfig as UserConfig;
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: `Error occured while creating the initial user config.json: ${
        error instanceof Error ? error.message : ''
      }`,
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function updateUserConfig(config: Config, userConfig?: UserConfig) {
  try {
    const userConfigFile = await fsp.readFile(path.join(config.configDir, 'config.json'));
    const currentUserConfig = JSON.parse(userConfigFile.toString());
    const updatedUserConfig = { ...currentUserConfig, ...userConfig };
    await fsp.writeFile(
      path.join(config.configDir, 'config.json'),
      JSON.stringify(updatedUserConfig, null, 2)
    );
    return currentUserConfig as UserConfig;
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when updating config.json',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}

export async function deleteUserConfig(config: Config) {
  try {
    await fsp.rm(path.join(config.configDir, 'config.json'));
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when deleting config.json',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }
}
