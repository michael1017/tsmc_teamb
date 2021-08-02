"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startFastify = void 0;
var fastify_1 = __importDefault(require("fastify"));
var util_1 = __importDefault(require("util"));
var API = __importStar(require("./API"));
var server = fastify_1.default({
    logger: { prettyPrint: true }
});
var startFastify = function (port) {
    server.listen(port, function (err, _) {
        if (err) {
            console.error(err);
        }
    });
    server.get('/ping', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, reply.status(200).send({ msg: 'pong' })];
        });
    }); });
    server.post('/webhook', function (request, reply) { return __awaiter(void 0, void 0, void 0, function () {
        var data, intent, departname, userid, phone, description, username, formBody, form, response_1, error_1, response_2, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = request.body;
                    console.log('request body = ', util_1.default.inspect(data, true, null));
                    intent = data.queryResult.intent.displayName;
                    if (!(intent === 'confirm_intent_y')) return [3 /*break*/, 4];
                    departname = data.queryResult.outputContexts[1].parameters.department;
                    userid = data.queryResult.outputContexts[1].parameters.id;
                    phone = data.queryResult.outputContexts[1].parameters.phone;
                    description = data.queryResult.outputContexts[1].parameters.user_question;
                    username = data.originalDetectIntentRequest.payload.data.from.first_name || '';
                    console.log('username = ', username);
                    formBody = {
                        userprofile: {
                            username: username,
                            departname: departname,
                            userid: userid,
                            phone: phone
                        },
                        description: description,
                        status: 'new',
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, API.addForm(formBody)];
                case 2:
                    form = (_a.sent()).data.form;
                    response_1 = {
                        fulfillmentMessages: [
                            {
                                text: {
                                    text: ["\u597D\u7684\uFF0C\u5DF2\u7D93\u70BA " + userid + " \u5831\u6848\u4E86, \u5831\u4FEE\u55AE\u865F\uFF1A " + form._id]
                                }
                            }
                        ]
                    };
                    return [2 /*return*/, reply.status(200).send(response_1)];
                case 3:
                    error_1 = _a.sent();
                    response_2 = {
                        fulfillmentMessages: [
                            {
                                text: {
                                    text: ["\u7CFB\u7D71\u932F\u8AA4\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66"]
                                }
                            }
                        ]
                    };
                    return [2 /*return*/, reply.status(200).send(response_2)];
                case 4:
                    response = {
                        fulfillmentMessages: [
                            {
                                text: {
                                    text: ['Text response from webhook']
                                }
                            }
                        ]
                    };
                    return [2 /*return*/, reply.status(200).send(response)];
            }
        });
    }); });
    return server;
};
exports.startFastify = startFastify;
