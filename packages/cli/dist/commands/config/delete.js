"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _nodePath = _interopRequireDefault(require("node:path"));
var _baseCommand = _interopRequireDefault(require("../../base-command"));
var _configUtilities = require("../../utilities/config.utilities");
class DeleteUserConfig extends _baseCommand.default {
    static description = "Delete local .condohub config";
    static examples = [
        `$ condohub config delete`
    ];
    static args = [
        {
            name: "test"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "config:delete"
        });
    }
    async run() {
        const { args  } = await this.parse(DeleteUserConfig);
        const configPath = _nodePath.default.join(this.config.configDir, "config.json");
        const userConfigExist = await (0, _configUtilities).getUserConfig(this.config);
        if (!userConfigExist) {
            this.logCommand(`no config.json found in ${configPath}`);
            this.logCommand(`nothing to delete`);
            return;
        }
        this.logCommand(`config.json found in ${configPath}`);
        await (0, _configUtilities).deleteUserConfig(this.config);
        this.logCommand(`config.json deleted successfully`);
    }
}
exports.default = DeleteUserConfig;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=delete.js.map