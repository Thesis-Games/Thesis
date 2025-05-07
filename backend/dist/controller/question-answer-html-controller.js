"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByCategoryAndLevel = exports.createQuestion = void 0;
const custom_error_1 = require("../utils/custom-error");
const html_model_1 = require("../model/html-model");
const createQuestion = async (req, res, next) => {
    try {
        const { category, level, question, answer1, answer2, answer3, answer4 } = req.body;
        const createQuestion = await html_model_1.htmlQuestionModel.create({
            category,
            level,
            question,
            answer1,
            answer2,
            answer3,
            answer4,
        });
        res.status(200).json({
            message: "Question created successfully",
            data: createQuestion,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.createQuestion = createQuestion;
const getByCategoryAndLevel = async (req, res, next) => {
    try {
        const { category, level } = req.params;
        const question = await html_model_1.htmlQuestionModel.findOne({
            category,
            level,
        });
        if (!question) {
            throw new custom_error_1.CustomError("Question not found", 404);
        }
        res.status(200).json(question);
    }
    catch (error) {
        next(error);
    }
};
exports.getByCategoryAndLevel = getByCategoryAndLevel;
