"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _inquirer = require("inquirer");
const hook = async function({ config , argv  }) {
    this.log(`${argv} was not found`);
    const { command  } = await (0, _inquirer).prompt([
        {
            name: "command",
            type: "list",
            message: "Which of these commands would you like to run?",
            choices: config.commands.map((p)=>(0, _core).toConfiguredId(p.id, config))
        }, 
    ]);
    if ((argv === null || argv === void 0 ? void 0 : argv.includes("--help")) || (argv === null || argv === void 0 ? void 0 : argv.includes("-h"))) {
        return config.runCommand("help", [
            (0, _core).toStandardizedId(command, config)
        ]);
    }
    return config.runCommand((0, _core).toStandardizedId(command, config), argv);
};
var _default = hook;
exports.default = _default;

//# sourceMappingURL=command-not-found.js.map