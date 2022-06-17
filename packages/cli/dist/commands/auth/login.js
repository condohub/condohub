"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _listr2 = require("listr2");
var _commonUtils = require("@condohub/common-utils");
var _baseCommand = _interopRequireDefault(require("../../base-command"));
var _configUtilities = require("../../utilities/config.utilities");
class AuthLogin extends _baseCommand.default {
    static description = "Authenticate your CLI client";
    static examples = [
        `$ condohub auth login`
    ];
    static args = [
        {
            name: "test"
        }
    ];
    constructor(argv, config){
        super(argv, config, {
            name: "auth:login"
        });
    }
    async init() {
        let [id, ...argv] = this.argv;
    }
    async run() {
        const { args  } = await this.parse(AuthLogin);
        let credentials;
        try {
            (0, _configUtilities).getUserConfig(this.config);
        } catch (error) {
            throw new _commonUtils.AppError({
                name: _commonUtils.ERROR_TYPE.ENV_ERROR,
                message: "Missing credentials.json file"
            });
        }
        // try {
        //   const client = getAuthorizedClient();
        // } catch (error) {}
        // try {
        //   const client = getAuthorizedClient();
        // } catch (error) {}
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
        this.log(`running in ${process.cwd()}`);
    }
}
exports.default = AuthLogin;
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=login.js.map