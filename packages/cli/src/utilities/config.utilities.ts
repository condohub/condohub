import { Config } from '@oclif/core';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { AppError, ERROR_TYPE } from '@condohub/common-utils';

import { defaultUserConfig } from '../constants/default-user-config.constant';
import { UserConfig } from '../models/user-config.model';

export function getUserConfigExists(config: Config): boolean {
  let userConfigExists = false;
  try {
    userConfigExists = fs.existsSync(path.join(config.configDir, 'config.json'));
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when reading config.json, did you run `condohub config init` first?',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }

  return userConfigExists;
}

export function getUserConfig(config: Config): UserConfig | undefined {
  let userConfigExists: boolean;
  let userConfig: UserConfig;
  try {
    userConfigExists = getUserConfigExists(config);
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when reading config.json, did you run `condohub config init` first?',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }

  if (!userConfigExists) {
    return undefined;
  }

  try {
    const userConfigFile = fs.readFileSync(path.join(config.configDir, 'config.json'));
    userConfig = JSON.parse(userConfigFile.toString());
  } catch (error) {
    throw new AppError({
      name: ERROR_TYPE.CLI_ERROR,
      message: 'Error occured when reading config.json, did you run `condohub config init` first?',
      stack: error instanceof Error ? error.stack : undefined,
    });
  }

  return userConfig;
}

export async function createUserConfig(config: Config, userConfig?: UserConfig) {
  try {
    await fsp.mkdir(path.join(config.configDir), {
      recursive: true,
    });
    await fsp.writeFile(
      path.join(config.configDir, 'config.json'),
      JSON.stringify(defaultUserConfig, null, 2)
    );
    return defaultUserConfig as UserConfig;
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
    const updatedUserConfig: UserConfig = {
      ...defaultUserConfig,
      ...currentUserConfig,
      ...userConfig,
      cliVersion: config.version,
      lastUpdatedAt: new Date().toISOString(),
    };
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
