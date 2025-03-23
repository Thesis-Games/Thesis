"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../utils/custom-error");
const errorHandler = (err, req, res, next) => {
    const statusCode = err instanceof custom_error_1.CustomError ? err.statusCode : 500;
    res.status(statusCode).json({
        error: err.message || "Internal Server Error",
    });
};
exports.errorHandler = errorHandler;
