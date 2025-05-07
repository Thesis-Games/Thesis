"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateVerifyAccountCreateToken = exports.generateResetToken = exports.generateRefreshToken = exports.generateAcessToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateAcessToken = (id, email, username) => {
    const accessToken = jsonwebtoken_1.default.sign({
        id: id,
        email: email,
        username: username,
        iss: "login",
        aud: "thesisgame.app",
    }, process.env.JWT_ACCESS_SECRET, { expiresIn: "1h" });
    return accessToken;
};
exports.generateAcessToken = generateAcessToken;
const generateRefreshToken = (id, email, username) => {
    const refreshToken = jsonwebtoken_1.default.sign({
        id: id,
        email: email,
        username: username,
        iss: "login",
        aud: "thesisgame.app",
    }, process.env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
    return refreshToken;
};
exports.generateRefreshToken = generateRefreshToken;
const generateResetToken = (id, email) => {
    const resetToken = jsonwebtoken_1.default.sign({
        id: id,
        email: email,
        iss: "reset-password",
        aud: "thesisgame.app",
    }, process.env.JWT_RESET_SECRET, { expiresIn: "1d" });
    return resetToken;
};
exports.generateResetToken = generateResetToken;
const generateVerifyAccountCreateToken = (email, password, username) => {
    const verifyEmailToken = jsonwebtoken_1.default.sign({
        password: password,
        email: email,
        username: username,
        iss: "verify-email-token",
        aud: "thesisgame.app",
    }, process.env.JWT_ACCOUNT_VERIFY, { expiresIn: "1d" });
    return verifyEmailToken;
};
exports.generateVerifyAccountCreateToken = generateVerifyAccountCreateToken;
