"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const session_model_1 = require("../model/session-model");
require("dotenv/config");
const custom_error_1 = require("../utils/custom-error");
const create_authentication_1 = require("../services/create-authentication");
const authenticationMiddleware = async (req, res, next) => {
    const accessToken = req.cookies?.auth_accessToken;
    const refreshToken = req.cookies?.auth_refreshToken;
    if (!refreshToken || !accessToken) {
        return next(new custom_error_1.CustomError("Unauthorized", 401));
    }
    try {
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        req.session = {
            account_id: decodedAccessToken.id,
            email: decodedAccessToken.email,
            username: decodedAccessToken.username,
        };
        return next();
    }
    catch {
        try {
            const decodedRefreshToken = jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            const currentSession = await session_model_1.sessionModel.findOne({
                account_id: decodedRefreshToken.id,
            });
            if (!currentSession) {
                return next(new custom_error_1.CustomError("Session not found", 401));
            }
            // Generate new tokens
            const newAccessToken = jsonwebtoken_1.default.sign({
                id: decodedRefreshToken.id,
                username: decodedRefreshToken.username,
                email: decodedRefreshToken.email,
                iss: "refresh",
                aud: "thesisgame.app",
            }, process.env.JWT_ACCESS_SECRET, { expiresIn: "5m" });
            const newRefreshToken = jsonwebtoken_1.default.sign({
                id: decodedRefreshToken.id,
                username: decodedRefreshToken.username,
                email: decodedRefreshToken.email,
                iss: "refresh",
                aud: "thesisgame.app",
            }, process.env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
            const { success_response } = await (0, create_authentication_1.createSessionAndDeleteToken)(decodedRefreshToken.id, newRefreshToken);
            if (!success_response) {
                return next(new custom_error_1.CustomError("Failed to create session", 500));
            }
            res.cookie("auth_accessToken", newAccessToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 5 * 60 * 1000,
            });
            res.cookie("auth_refreshToken", newRefreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 24 * 60 * 60 * 1000,
            });
            // Attach session data
            req.session = {
                account_id: decodedRefreshToken.id,
                email: decodedRefreshToken.email,
                username: decodedRefreshToken.username,
            };
            return next();
        }
        catch {
            return next(new custom_error_1.CustomError("Unauthorized", 401));
        }
    }
};
exports.authenticationMiddleware = authenticationMiddleware;
