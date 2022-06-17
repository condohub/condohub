"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _core = require("@oclif/core");
var _listr2 = require("listr2");
var _logUtilities = require("../../utilities/log.utilities");
class Auth extends _core.Command {
    log = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:auth`);
    logWarn = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:auth:warn`);
    logError = (0, _logUtilities).debugInstance(`${_logUtilities.NS}:auth:error`);
    static description = "Auth command";
    static examples = [
        `$ condohub  auth`
    ];
    static args = [
        {
            name: "test"
        }
    ];
    async init() {
        let [id, ...argv] = this.argv;
    }
    async run() {
        const { args  } = await this.parse(Auth);
        const tasks = new _listr2.Listr([
            {
                title: "  This task will execute.",
                task: (ctx, task)=>task.newListr([
                        {
                            title: "  This is a subtask.",
                            task: async ()=>{
                                return new Promise((resolve, reject)=>{
                                    setTimeout(()=>{
                                        resolve("Done");
                                    }, 3000);
                                });
                            }
                        }, 
                    ])
            }, 
        ], {
            rendererOptions: {
                showTimer: true,
                indentation: 2
            }
        });
        try {
            await tasks.run();
        } catch (e) {
            console.error(e);
        }
    }
}
exports.default = Auth;

//# sourceMappingURL=index.js.map