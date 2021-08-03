"use strict";
exports.__esModule = true;
exports.server = void 0;
var server_1 = require("./server");
// Start your server
var server = server_1.startFastify(80);
exports.server = server;
