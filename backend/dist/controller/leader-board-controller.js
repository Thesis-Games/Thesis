"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeaderBoard = exports.createPoint = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const custom_error_1 = require("../utils/custom-error");
require("dotenv/config");
const leader_board_model_1 = require("../model/leader-board-model");
const level_model_1 = require("../model/level-model");
const createPoint = async (req, res, next) => {
    const accessToken = req.cookies?.auth_accessToken;
    if (!accessToken) {
        return next(new custom_error_1.CustomError("Unauthorized", 400));
    }
    try {
        const { category, level, points } = req.body;
        const decodedAccessToken = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        const checkUser = await leader_board_model_1.leaderBoardModel.findOne({
            user_id: decodedAccessToken.id,
        });
        if (!checkUser) {
            const createUserLevel = await level_model_1.levelModel.create({
                user_id: decodedAccessToken.id,
                level,
                points,
                category,
            });
            const createAccountInLeaderBoard = await leader_board_model_1.leaderBoardModel.create({
                user_id: decodedAccessToken.id,
                email: decodedAccessToken.email,
                username: decodedAccessToken.username,
                points,
            });
            if (!createAccountInLeaderBoard || !createUserLevel) {
                throw new custom_error_1.CustomError("Error creating user records", 400);
            }
            res.status(200).json({
                message: "Created Points",
                leaderboard: createAccountInLeaderBoard,
                level: createUserLevel,
            });
            return;
        }
        let findUserLevel = await level_model_1.levelModel.findOne({
            user_id: decodedAccessToken.id,
            level,
            category,
        });
        if (!findUserLevel) {
            const incrementPointsFromUser = await leader_board_model_1.leaderBoardModel.findOneAndUpdate({ user_id: decodedAccessToken.id }, { $inc: { points } }, { new: true });
            const createUserLevel = await level_model_1.levelModel.create({
                user_id: decodedAccessToken.id,
                level,
                points,
                category,
            });
            res.status(200).json({
                message: "New level added and points incremented",
                level: createUserLevel,
                leaderboard: incrementPointsFromUser,
            });
            return;
        }
        if (findUserLevel.points == 3) {
            res.status(200).json({ message: "No need to add points" });
        }
        if (findUserLevel.points == points) {
            res.status(200).json({ message: "No update needed" });
        }
        const updateCheckPoint = await level_model_1.levelModel.findOneAndUpdate({ user_id: decodedAccessToken.id, level, category }, { points }, { new: true });
        const incrementPointsFromUser = await leader_board_model_1.leaderBoardModel.findOneAndUpdate({ user_id: decodedAccessToken.id }, { $inc: { points: points - findUserLevel.points } }, // Ensure points are not added twice
        { new: true });
        res.status(200).json({
            message: "Points successfully updated",
            leaderboard: incrementPointsFromUser,
            level: updateCheckPoint,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createPoint = createPoint;
const getLeaderBoard = async (req, res, next) => {
    try {
        const leaderBoard = await leader_board_model_1.leaderBoardModel.find().sort({ points: -1 });
        res.status(200).json({ data: leaderBoard });
    }
    catch (error) {
        next(error);
    }
};
exports.getLeaderBoard = getLeaderBoard;
