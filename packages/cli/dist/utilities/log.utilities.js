"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.enableDebug = enableDebug;
exports.logCommand = logCommand;
exports.log = log;
exports.warn = warn;
exports.debugInstance = exports.NS = void 0;
var _debug = _interopRequireDefault(require("debug"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const NS = "condohub:cli";
exports.NS = NS;
const debugInstance = _debug.default;
exports.debugInstance = debugInstance;
function enableDebug() {
    if (!process.env.DEBUG) {
        debugInstance.enable("condohub:cli*");
    }
    /**
   * Enable default logging
   */ if (process.env.DEBUG) {
        debugInstance.enable(process.env.DEBUG);
    }
}
function logCommand(message, ...args) {
    process.stdout.write(`－  ${message}\n`);
}
function log(message, ...args) {
    process.stdout.write(`🏠  ${message}\n`);
}
function warn(input) {
    if (input instanceof Error) {
        process.stdout.write(`🏠  ${input}\n`);
        return input;
    }
    process.stdout.write(`🏠  ${input}\n`);
    return input;
}

//# sourceMappingURL=log.utilities.js.map