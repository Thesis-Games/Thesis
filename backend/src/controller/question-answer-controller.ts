import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/custom-error";
import { questionModel } from "../model/question-model";
export const createQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category, level, question, answer } = req.body;

    const createQuestion = await questionModel.create({
      category,
      level,
      question,
      answer,
    });
    res.status(200).json({
      message: "Question created successfully",
      data: createQuestion,
    });
  } catch (error) {
    next(error);
  }
};
export const getByCategoryAndLevel = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { category, level } = req.params;
    const question = await questionModel.findOne({
      category,
      level,
    });

    if (!question) {
      throw new CustomError("Question not found", 404);
    }

    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
};
