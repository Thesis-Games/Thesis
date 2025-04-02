import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/custom-error";
import { levelModel } from "../model/level-model";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const getFinishLevel = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.cookies?.auth_accessToken;

  if (!accessToken) {
    return next(new CustomError("Unauthorized", 400));
  }
  try {
    const { category } = req.params;

    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string
    ) as { id: string; email: string };

    console.log(decodedAccessToken);
    const findLevel = await levelModel.find({
      user_id: decodedAccessToken.id,
      category: category,
    });

    res.status(200).json({ data: findLevel });
  } catch (error) {
    next(error);
  }
};

export const getLevel = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.cookies?.auth_accessToken;

  if (!accessToken) {
    return next(new CustomError("Unauthorized", 400));
  }
  try {
    const { category, level } = req.body;

    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string
    ) as { id: string; email: string };

    const findLevel = await levelModel.findOne({
      user_id: decodedAccessToken.id,
      category: category,
      level: level,
    });

    res.status(200).json({ data: findLevel });
  } catch (error) {
    next(error);
  }
};

export const levelValidateBeforeProceed = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.cookies?.auth_accessToken;

  if (!accessToken) {
    return next(new CustomError("Unauthorized", 400));
  }
  try {
    const { category, level } = req.body;
    const convertedLevel = Number(level - 1);
    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string
    ) as { id: string; email: string };

    const findLevel = await levelModel.findOne({
      user_id: decodedAccessToken.id,
      category: category,
      level: convertedLevel,
    });

    if (!findLevel) {
      throw new CustomError("Level not found", 404);
    }

    res.status(200).json({ data: findLevel });
  } catch (error) {
    next(error);
  }
};
