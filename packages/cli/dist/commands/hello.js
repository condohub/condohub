"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _baseCommand = _interopRequireDefault(require("../base-command"));
class Hello extends _baseCommand.default {
    static description = "Test command to verify that the CLI build is valid.";
    static examples = [
        `$ condohub hello world`
    ];
    static args = [
        {
            name: "word"
        }
    ];
    async run() {
        const { args  } = await this.parse(Hello);
        if (args.word) {
            this.logCommand(`hello ${args.word}`);
            return;
        }
        this.logCommand(`hello`);
    }
}
exports.default = Hello;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=hello.js.map