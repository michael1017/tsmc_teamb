"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var formSchema = new mongoose_1.default.Schema({
    userprofile: {
        username: { type: String, required: true },
        departname: { type: String, required: true },
        userid: { type: String, required: true },
        phone: { type: String, required: true }
    },
    status: { type: String, default: 'new' },
    description: { type: String }
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Form', formSchema);
