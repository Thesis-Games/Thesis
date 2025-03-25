import { Request, Response, NextFunction } from "express";
import { hashText, compareTextToHashedText } from "../lib/bcrypt";
import { CustomError } from "../utils/custom-error";
import { createAuthenticationAccount } from "../services/create-authentication";
import { checkEmailExisting } from "../services/check-email-existing-";
import { createSessionAndDeleteToken } from "../services/create-authentication";
import jwt from "jsonwebtoken";
import RequestWithSession from "../types/request-with-session";
import {
  generateAcessToken,
  generateRefreshToken,
} from "../services/generate-token";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashText(password);

    if (!hashedPassword) {
      throw new CustomError("Failed to hash password", 500);
    }

    const { user, Success_response } = await createAuthenticationAccount({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: Success_response,
      user: user,
    });
  } catch (error) {
    next(error);
  }
};
export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const account = await checkEmailExisting(email);

    if (!account) {
      throw new CustomError("Account not Found", 400);
    }

    const isPasswordValid = await compareTextToHashedText(
      password,
      account.password
    );

    if (!isPasswordValid) {
      throw new CustomError("Invalid Password", 400);
    }

    const accessToken = generateAcessToken(account.id, email);

    const refreshToken = generateRefreshToken(account.id, email);

    const { success_response } = await createSessionAndDeleteToken(
      account.id,
      refreshToken
    );

    if (!success_response) {
      throw new CustomError("Failed to create session", 500);
    }

    res.cookie("auth_accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 10 * 1000,
    });

    res.cookie("auth_refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    throw new CustomError("No token provided", 401);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);

    res.status(200).json({
      decoded,
    });
  } catch (error) {
    next(error);
  }
};
export const profile = async (
  req: RequestWithSession,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const session = req.session;

  try {
    res.json({
      message: "Profile fetched successfully",
      user: session?.account_id,
      email: session?.email,
    });
  } catch (error) {
    next(error);
  }
};
