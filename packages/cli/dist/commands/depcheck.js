"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _nodeUtils = require("@condohub/node-utils");
var _logUtilities = require("../utilities/log.utilities");
class Depcheck extends _core.Command {
    log = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:depcheck`);
    logWarn = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:depcheck:warn`);
    logError = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:depcheck:error`);
    static description = "Shortcut to run depcheck";
    static examples = [
        `$ nr depcheck`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    async run() {
        (0, _logUtilities).enableDebug();
        const { args  } = await this.parse(Depcheck);
        this.log(`running in ${process.cwd()}`);
        const command = (0, _childProcess).spawnSync(`npm exec depcheck ${args.args || ""}`, {
            shell: (0, _nodeUtils).getShellForPlatform(),
            stdio: [
                "inherit",
                "pipe",
                "pipe"
            ],
            env: process.env
        });
        if (command.stdout.toString().length) {
            if (/Missing/gi.test(command.stdout.toString())) {
                this.error(command.stdout.toString());
            }
            if (/Unused/gi.test(command.stdout.toString())) {
                this.logWarn(command.stdout.toString());
                return;
            }
            this.log(command.stdout.toString());
        }
        if (command.stderr.toString().length) {
            if (/DeprecationWarning/gi.test(command.stderr.toString())) {
                return;
            }
            this.logError(command.stderr.toString());
            this.error(command.stderr.toString());
        }
    }
}
exports.default = Depcheck;

//# sourceMappingURL=depcheck.js.map