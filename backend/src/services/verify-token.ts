import "dotenv/config";
import jwt from "jsonwebtoken";
export const verifyResetPasswordToken = async (token: string) => {
  const decodedResetPasswordToken = jwt.verify(
    token,
    process.env.JWT_RESET_SECRET as string
  ) as { id: string; email: string };

  if (!decodedResetPasswordToken) {
    throw new Error("Invalid token");
  }
  return decodedResetPasswordToken;
};
