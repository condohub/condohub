"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserConfigExists = getUserConfigExists;
exports.getUserConfig = getUserConfig;
exports.createUserConfig = createUserConfig;
exports.updateUserConfig = updateUserConfig;
exports.deleteUserConfig = deleteUserConfig;
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _promises = _interopRequireDefault(require("node:fs/promises"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _commonUtils = require("@condohub/common-utils");
var _defaultUserConfigConstant = require("../constants/default-user-config.constant");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function getUserConfigExists(config) {
    let userConfigExists = false;
    try {
        userConfigExists = _nodeFs.default.existsSync(_nodePath.default.join(config.configDir, "config.json"));
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when reading config.json, did you run `condohub config init` first?",
            stack: error instanceof Error ? error.stack : undefined
        });
    }
    return userConfigExists;
}
function getUserConfig(config) {
    let userConfigExists;
    let userConfig;
    try {
        userConfigExists = getUserConfigExists(config);
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when reading config.json, did you run `condohub config init` first?",
            stack: error instanceof Error ? error.stack : undefined
        });
    }
    if (!userConfigExists) {
        return undefined;
    }
    try {
        const userConfigFile = _nodeFs.default.readFileSync(_nodePath.default.join(config.configDir, "config.json"));
        userConfig = JSON.parse(userConfigFile.toString());
    } catch (error1) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when reading config.json, did you run `condohub config init` first?",
            stack: error1 instanceof Error ? error1.stack : undefined
        });
    }
    return userConfig;
}
async function createUserConfig(config, userConfig) {
    try {
        await _promises.default.mkdir(_nodePath.default.join(config.configDir), {
            recursive: true
        });
        await _promises.default.writeFile(_nodePath.default.join(config.configDir, "config.json"), JSON.stringify(_defaultUserConfigConstant.defaultUserConfig, null, 2));
        return _defaultUserConfigConstant.defaultUserConfig;
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: `Error occured while creating the initial user config.json: ${error instanceof Error ? error.message : ""}`,
            stack: error instanceof Error ? error.stack : undefined
        });
    }
}
async function updateUserConfig(config, userConfig) {
    try {
        const userConfigFile = await _promises.default.readFile(_nodePath.default.join(config.configDir, "config.json"));
        const currentUserConfig = JSON.parse(userConfigFile.toString());
        const updatedUserConfig = {
            ..._defaultUserConfigConstant.defaultUserConfig,
            ...currentUserConfig,
            ...userConfig,
            cliVersion: config.version,
            lastUpdatedAt: new Date().toISOString()
        };
        await _promises.default.writeFile(_nodePath.default.join(config.configDir, "config.json"), JSON.stringify(updatedUserConfig, null, 2));
        return currentUserConfig;
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when updating config.json",
            stack: error instanceof Error ? error.stack : undefined
        });
    }
}
async function deleteUserConfig(config) {
    try {
        await _promises.default.rm(_nodePath.default.join(config.configDir, "config.json"));
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when deleting config.json",
            stack: error instanceof Error ? error.stack : undefined
        });
    }
}

//# sourceMappingURL=config.utilities.js.map