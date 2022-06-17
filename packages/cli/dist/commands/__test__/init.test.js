"use strict";
var _test = require("@oclif/test");
describe('the "config init" command', ()=>{
    _test.test.stdout().command([
        "config init"
    ]).it("should output the CLI greetings", (context)=>{
        (0, _test).expect(context.stdout).contain("CondoHub CLI");
    });
});

//# sourceMappingURL=init.test.js.map