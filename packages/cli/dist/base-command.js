"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _logUtilities = require("./utilities/log.utilities");
class BaseCommand extends _core.Command {
    log = _logUtilities.log;
    logCommand = _logUtilities.logCommand;
    warn = _logUtilities.warn;
    logDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:condohub`);
    logWarnDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:condohub:warn`);
    logErrorDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:condohub:error`);
    constructor(argv, config, commandConfig){
        super(argv, config);
        if (commandConfig === null || commandConfig === void 0 ? void 0 : commandConfig.name) {
            this.logDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}`);
            this.logWarnDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}:warn`);
            this.logErrorDebug = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:${commandConfig.name}:error`);
        }
        this.logDebug("command called");
    }
    async run() {}
}
exports.default = BaseCommand;

//# sourceMappingURL=base-command.js.map