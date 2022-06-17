"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _childProcess = require("child_process");
var _core = require("@oclif/core");
var _nodeUtils = require("@condohub/node-utils");
var _logUtilitiesJs = require("../utilities/log.utilities.js");
class JestWatch extends _core.Command {
    log = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:jest`);
    logWarn = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:jest:warn`);
    logError = (0, _logUtilitiesJs).debugInstance(`${_logUtilitiesJs.NS}:jest:error`);
    static description = "Shortcut to run jest with typescript (ts-node)";
    static examples = [
        `$ nr jest`
    ];
    static args = [
        {
            name: "args"
        }
    ];
    static flags = {
        config: _core.Flags.string({
            description: "path to jest config file",
            default: "jest.config.ts"
        })
    };
    async run() {
        (0, _logUtilitiesJs).enableDebug();
        const { args , flags  } = await this.parse(JestWatch);
        const command = [
            `cross-env TS_NODE_PROJECT=../../tsconfig.node-cli.json node -r ts-node/register ../../node_modules/jest/bin/jest`,
            `${flags.config ? "--config " + flags.config : ""}`,
            `${args.args || "--watch"}`, 
        ].join(" ");
        this.log(`running: ${command}`);
        const cmd = (0, _childProcess).spawnSync(command, {
            shell: (0, _nodeUtils).getShellForPlatform(),
            stdio: [
                "inherit",
                "inherit",
                "inherit"
            ],
            env: process.env
        });
    }
}
exports.default = JestWatch;

//# sourceMappingURL=jest-watch.js.map