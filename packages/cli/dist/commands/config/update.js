"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nodePath = _interopRequireDefault(require("node:path"));
var _baseCommand = _interopRequireDefault(require("../../base-command"));
var _configUtilities = require("../../utilities/config.utilities");
class InitUserConfig extends _baseCommand.default {
    static description = "Update local .condohub config";
    static examples = [
        `$ condohub config update`
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "config:update"
        });
    }
    async run() {
        const { args  } = await this.parse(InitUserConfig);
        const configPath = _nodePath.default.join(this.config.configDir, "config.json");
        const userConfigExist = await (0, _configUtilities).getUserConfigExists(this.config);
        if (!userConfigExist) {
            this.logCommand(`no config.json found in ${configPath}, did you run 'condohub config init'?`);
            return;
        }
        this.logCommand(`config.json found in ${configPath}`);
        const userConfig = await (0, _configUtilities).updateUserConfig(this.config);
        this.logCommand(`config.json updated successfully`);
    }
}
exports.default = InitUserConfig;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=update.js.map