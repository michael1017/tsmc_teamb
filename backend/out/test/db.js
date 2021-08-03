"use strict";
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
exports.clearDatabase = exports.closeDatabase = exports.connect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var mongodb_memory_server_1 = require("mongodb-memory-server");
// import * as F from 'fp-ts/function'
// import * as TE from 'fp-ts/TaskEither'
var mongod = new mongodb_memory_server_1.MongoMemoryServer();
/**
 * Connect to mock memory db.
 */
var connect = function () { return __awaiter(void 0, void 0, void 0, function () {
    var uri, mongooseOpts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, mongod.start()];
            case 1:
                _a.sent();
                uri = mongod.getUri();
                mongooseOpts = {
                    useNewUrlParser: true,
                    autoReconnect: true,
                    reconnectTries: Number.MAX_VALUE,
                    reconnectInterval: 1000,
                    poolSize: 10
                };
                return [4 /*yield*/, mongoose_1.default.connect(uri, mongooseOpts)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.connect = connect;
/**
 * Close db connection
 */
var closeDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // const dropDbTE = TE.tryCatch(
            //     () => mongoose.connection.dropDatabase(),
            //     (e) => new Error(`Drop DB error: ${e}`)
            // )
            // const connCloseTE = TE.tryCatch(
            //     () => mongoose.connection.close(),
            //     (e) => new Error(`Connection closing error: ${e}`)
            // )
            // const dbStopTE = TE.tryCatch(
            //     () => mongod.stop(),
            //     (e) => new Error(`DB stopping error: ${e}`)
            // )
            // const p = F.pipe(
            //     TE.bindTo('dropDb')(dropDbTE),
            //     TE.bind('connClose', () => connCloseTE),
            //     TE.bind('dbStop', () => dbStopTE),
            //     TE.map(({ dropDb, connClose, dbStop }) => dbStop)
            // )
            // await TE.match(
            //     (e) => console.log(`InMemMongo Error: ${e}`),
            //     (_) => ({})
            // )(p)()
            return [4 /*yield*/, mongoose_1.default.connection.dropDatabase()];
            case 1:
                // const dropDbTE = TE.tryCatch(
                //     () => mongoose.connection.dropDatabase(),
                //     (e) => new Error(`Drop DB error: ${e}`)
                // )
                // const connCloseTE = TE.tryCatch(
                //     () => mongoose.connection.close(),
                //     (e) => new Error(`Connection closing error: ${e}`)
                // )
                // const dbStopTE = TE.tryCatch(
                //     () => mongod.stop(),
                //     (e) => new Error(`DB stopping error: ${e}`)
                // )
                // const p = F.pipe(
                //     TE.bindTo('dropDb')(dropDbTE),
                //     TE.bind('connClose', () => connCloseTE),
                //     TE.bind('dbStop', () => dbStopTE),
                //     TE.map(({ dropDb, connClose, dbStop }) => dbStop)
                // )
                // await TE.match(
                //     (e) => console.log(`InMemMongo Error: ${e}`),
                //     (_) => ({})
                // )(p)()
                _a.sent();
                return [4 /*yield*/, mongoose_1.default.connection.close()];
            case 2:
                _a.sent();
                return [4 /*yield*/, mongod.stop()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.closeDatabase = closeDatabase;
/**
 * Delete db collections
 */
var clearDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var collections, _a, _b, _i, key, collection;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                collections = mongoose_1.default.connection.collections;
                _a = [];
                for (_b in collections)
                    _a.push(_b);
                _i = 0;
                _c.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                key = _a[_i];
                collection = collections[key];
                return [4 /*yield*/, collection.deleteMany({})];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.clearDatabase = clearDatabase;
