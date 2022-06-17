"use strict";
var _test = require("@oclif/test");
describe('the "hello" command', ()=>{
    _test.test.stdout().command([
        "hello"
    ]).it('should output "hello"', (context)=>{
        (0, _test).expect(context.stdout).contain("hello");
    });
    _test.test.stdout().command([
        "hello",
        "world"
    ]).it('should output "hello world"', (context)=>{
        (0, _test).expect(context.stdout).contain("hello world");
    });
});

//# sourceMappingURL=hello.test.js.map