"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.levelValidation = exports.getLevel = exports.getFinishLevel = void 0;
const custom_error_1 = require("../utils/custom-error");
const level_model_1 = require("../model/level-model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const getFinishLevel = async (req, res, next) => {
    const accessToken = req.cookies?.auth_accessToken;
    if (!accessToken) {
        return next(new custom_error_1.CustomError("Unauthorized", 400));
    }
    try {
        const { category } = req.params;
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const findLevel = await level_model_1.levelModel.find({
            user_id: decodedAccessToken.id,
            category: category,
        });
        res.status(200).json({ data: findLevel });
    }
    catch (error) {
        next(error);
    }
};
exports.getFinishLevel = getFinishLevel;
const getLevel = async (req, res, next) => {
    const accessToken = req.cookies?.auth_accessToken;
    if (!accessToken) {
        return next(new custom_error_1.CustomError("Unauthorized", 400));
    }
    try {
        const { category, level } = req.body;
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const findLevel = await level_model_1.levelModel.findOne({
            user_id: decodedAccessToken.id,
            category: category,
            level: level,
        });
        res.status(200).json({ data: findLevel });
    }
    catch (error) {
        next(error);
    }
};
exports.getLevel = getLevel;
const levelValidation = async (req, res, next) => {
    const accessToken = req.cookies?.auth_accessToken;
    if (!accessToken) {
        return next(new custom_error_1.CustomError("Unauthorized", 400));
    }
    try {
        const { category, level } = req.body;
        const levelNumber = Number(level - 1);
        if (level == 1) {
            res.status(200).json({
                category: category,
                level: level,
                message: "Level validated successfully",
            });
            return;
        }
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const findLevel = await level_model_1.levelModel.findOne({
            user_id: decodedAccessToken.id,
            category: category,
            level: levelNumber.toString(),
        });
        if (!findLevel) {
            throw new custom_error_1.CustomError("Level not found", 404);
        }
        res.status(200).json({
            category: category,
            level: level,
            message: "Level validated successfully",
        });
    }
    catch (error) {
        next(error);
    }
};
exports.levelValidation = levelValidation;
