"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookies = void 0;
const custom_error_1 = require("../utils/custom-error");
const getCookies = (req, res, next) => {
    try {
        const token = req.cookies.auth_accessToken;
        if (!token) {
            throw new custom_error_1.CustomError("No token provided", 401);
        }
        res.status(200).json({
            token: token,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getCookies = getCookies;
