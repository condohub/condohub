"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _logUtilities = require("../utilities/log.utilities");
/**
 * @see https://oclif.io/docs/hooks
 */ const hook = async function(opts) {
    (0, _logUtilities).log(`Running command "${opts.Command.name.toLowerCase()}"`);
};
var _default = hook;
exports.default = _default;

//# sourceMappingURL=prerun.js.map