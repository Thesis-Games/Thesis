import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { CustomError } from "../utils/custom-error";
import "dotenv/config";
import { leaderBoardModel } from "../model/leader-board-model";
import { levelModel } from "../model/level-model";
export const createPoint = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const accessToken = req.cookies?.auth_accessToken;

  if (!accessToken) {
    throw new CustomError("Unauthorized", 400);
  }
  try {
    const { category, level, points } = req.body;
    const decodedAccessToken = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string
    ) as { id: string; email: string };

    const checkUser = await leaderBoardModel.findOne({
      user_id: decodedAccessToken.id,
    });

    if (!checkUser) {
      const createUserLevel = await levelModel.create({
        user_id: decodedAccessToken.id,
        level: level,
        points: points,
        category: category,
      });

      const createAccountInLeaderBoard = await leaderBoardModel.create({
        user_id: decodedAccessToken.id,
        email: decodedAccessToken.email,
        points: points,
      });

      if (!createAccountInLeaderBoard || createUserLevel) {
        throw new CustomError("create error", 400);
      }
      res.status(200).json({
        message: "Created Points",
        leaderboard: createAccountInLeaderBoard,
        level: createUserLevel,
      });
    }

    const findUserLevel = await levelModel.findOne({
      user_id: decodedAccessToken.id,
      level: level,
      category: category,
    });

    if (!findUserLevel) {
      const incrementPointsFromUser = await leaderBoardModel.findOneAndUpdate(
        { user_id: decodedAccessToken.id },
        { $inc: { points: points } },
        { new: true }
      );

      const createUserLevel = await levelModel.create({
        userid: decodedAccessToken.id,
        level: level,
        star: points,
        category: category,
      });
      res.status(200).send({
        create: createUserLevel,
        incrementpoint: incrementPointsFromUser,
      });
    }
    const checkStar = findUserLevel?.points;

    if (checkStar == 3) {
      res.status(200).send({
        message: "no need to add",
      });
      return;
    }

    if (checkStar == points) {
      res.status(200).send({
        message: "no need to update",
      });
      return;
    }

    const updateCheckPoint = await levelModel.findOneAndUpdate(
      { user_id: decodedAccessToken.id, level: level, category: category },
      { points: points },
      { new: true }
    );
    const incrementPointsFromUser = await leaderBoardModel.findOneAndUpdate(
      { user_id: decodedAccessToken.id },
      { $inc: { points: points } },
      { new: true }
    );
    res.status(200).json({
      message: "Points successfully incremented, and star updated",
      leaderboard: incrementPointsFromUser,
      level: updateCheckPoint,
    });
  } catch (error) {
    next(error);
  }
};
