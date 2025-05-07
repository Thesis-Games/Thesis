"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccountCreateToken = exports.verifyResetPasswordToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyResetPasswordToken = async (token) => {
    const decodedResetPasswordToken = jsonwebtoken_1.default.verify(token, process.env.JWT_RESET_SECRET);
    if (!decodedResetPasswordToken) {
        throw new Error("Invalid token");
    }
    return decodedResetPasswordToken;
};
exports.verifyResetPasswordToken = verifyResetPasswordToken;
const verifyAccountCreateToken = async (token) => {
    const decodedResetPasswordToken = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCOUNT_VERIFY);
    if (!decodedResetPasswordToken) {
        throw new Error("Invalid token");
    }
    return decodedResetPasswordToken;
};
exports.verifyAccountCreateToken = verifyAccountCreateToken;
