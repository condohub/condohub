"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserConfig = getUserConfig;
exports.createUserConfig = createUserConfig;
exports.updateUserConfig = updateUserConfig;
exports.deleteUserConfig = deleteUserConfig;
var _nodeFs = _interopRequireDefault(require("node:fs"));
var _promises = _interopRequireDefault(require("node:fs/promises"));
var _nodePath = _interopRequireDefault(require("node:path"));
var _commonUtils = require("@condohub/common-utils");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function getUserConfig(config) {
    let userConfigExists = false;
    try {
        userConfigExists = _nodeFs.default.existsSync(_nodePath.default.join(config.configDir, "config.json"));
    } catch (error) {
        throw new _commonUtils.AppError({
            name: _commonUtils.ERROR_TYPE.CLI_ERROR,
            message: "Error occured when reading config.json",
            stack: error instanceof Error ? error.stack : undefined
        });
    }
    return userConfigExists;
}
async function createUserConfig(config, userConfig) {
    try {
        const initialUserConfig = {
            accessToken: ""
        };
        await _promises.default.mkdir(_nodePath.default.join(config.configDir), {
            recursive: true
        });
        await _promises.default.writeFile(_nodePath.default.join(config.configDir, "config.json"), JSON.stringify(initialUserConfig, null, 2));
        return initialUserConfig;
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
            ...currentUserConfig,
            ...userConfig
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