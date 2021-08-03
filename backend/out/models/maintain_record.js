"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var recordSchema = new mongoose_1.default.Schema({
    formid: { type: String, required: true },
    maintain_description: { type: String, required: true },
}, {
    timestamps: true
});
exports.default = mongoose_1.default.model('Record', recordSchema);
