"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var ora = require("ora");
var pick_1 = require("lodash/pick");
var TaskHelper = (function () {
    function TaskHelper() {
    }
    TaskHelper.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, __Choices, questions, options, handers, _loop_1, _b, _c, task, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        __Choices = this.__Tasks.map(function (o) { return pick_1.default(o, ['name', 'value']); });
                        questions = [
                            {
                                type: 'rawlist',
                                name: 'type_name',
                                message: /(\:|\：)$/.test(this.__displayTitle) ? this.__displayTitle : this.__displayTitle + ":",
                                choices: __Choices
                            }
                        ];
                        return [4, inquirer.prompt(questions)];
                    case 1:
                        options = _e.sent();
                        handers = {};
                        _loop_1 = function (task) {
                            if (!task.script)
                                return "continue";
                            handers[task.value] = function () { return __awaiter(_this, void 0, void 0, function () {
                                var result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, task.script()];
                                        case 1:
                                            result = _a.sent();
                                            console.log("");
                                            console.log(result);
                                            return [2];
                                    }
                                });
                            }); };
                        };
                        try {
                            for (_b = __values(this.__Tasks), _c = _b.next(); !_c.done; _c = _b.next()) {
                                task = _c.value;
                                _loop_1(task);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        _d = handers[options.type_name];
                        if (!_d) return [3, 3];
                        return [4, TaskSpinner(handers[options.type_name]())];
                    case 2:
                        _d = (_e.sent());
                        _e.label = 3;
                    case 3:
                        _d;
                        process.exit(0);
                        return [2];
                }
            });
        });
    };
    return TaskHelper;
}());
exports.TaskHelper = TaskHelper;
function TaskSetting(setting) {
    return function (target) {
        target.prototype.__displayTitle = setting.title;
        target.prototype.__Tasks = setting.tasks;
    };
}
exports.TaskSetting = TaskSetting;
function TaskSpinner(task) {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = ora("Initialize Data ...").start();
                    return [4, task];
                case 1:
                    result = _a.sent();
                    return [4, new Promise(function (resolve) {
                            setTimeout(function () {
                                spinner.stop();
                                resolve(result);
                            }, 500);
                        })];
                case 2: return [2, _a.sent()];
            }
        });
    });
}
exports.TaskSpinner = TaskSpinner;
