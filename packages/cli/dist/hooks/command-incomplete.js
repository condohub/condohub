"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _inquirer = require("inquirer");
const hook = async function({ config , matches , argv  }) {
    const { command  } = await (0, _inquirer).prompt([
        {
            name: "command",
            type: "list",
            message: "Which of these commands would you like to run?",
            choices: matches.map((p)=>(0, _core).toConfiguredId(p.id, config))
        }, 
    ]);
    if (argv.includes("--help") || argv.includes("-h")) {
        return config.runCommand("help", [
            (0, _core).toStandardizedId(command, config)
        ]);
    }
    return config.runCommand((0, _core).toStandardizedId(command, config), argv);
};
var _default = hook;
exports.default = _default;

//# sourceMappingURL=command-incomplete.js.map