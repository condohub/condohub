"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _logUtilities = require("../utilities/log.utilities");
/**
 * @see https://oclif.io/docs/hooks
 */ const hook = async function(opts) {
    (0, _logUtilities).log(`CondoHub CLI v${this.config.version}`);
    (0, _logUtilities).log(`Starting...`);
};
var _default = hook;
exports.default = _default;

//# sourceMappingURL=init.js.map