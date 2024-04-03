"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultionApiTimeoutError = exports.MultionApiError = exports.MultionApiEnvironment = exports.MultionApiClient = exports.MultionApi = void 0;
exports.MultionApi = __importStar(require("./api"));
var Client_1 = require("./Client");
Object.defineProperty(exports, "MultionApiClient", { enumerable: true, get: function () { return Client_1.MultionApiClient; } });
var environments_1 = require("./environments");
Object.defineProperty(exports, "MultionApiEnvironment", { enumerable: true, get: function () { return environments_1.MultionApiEnvironment; } });
var errors_1 = require("./errors");
Object.defineProperty(exports, "MultionApiError", { enumerable: true, get: function () { return errors_1.MultionApiError; } });
Object.defineProperty(exports, "MultionApiTimeoutError", { enumerable: true, get: function () { return errors_1.MultionApiTimeoutError; } });
