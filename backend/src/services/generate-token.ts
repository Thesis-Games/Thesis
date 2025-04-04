import "dotenv/config";
import jwt from "jsonwebtoken";

export const generateAcessToken = (id: string, email: string) => {
  const accessToken = jwt.sign(
    {
      id: id,
      email: email,
      iss: "login",
      aud: "thesisgame.app",
    },
    process.env.JWT_ACCESS_SECRET as string,
    { expiresIn: "1h" }
  );

  return accessToken;
};

export const generateRefreshToken = (id: string, email: string) => {
  const refreshToken = jwt.sign(
    {
      id: id,
      email: email,
      iss: "login",
      aud: "thesisgame.app",
    },
    process.env.JWT_REFRESH_SECRET as string,
    { expiresIn: "1d" }
  );

  return refreshToken;
};
export const generateResetToken = (id: string, email: string) => {
  const resetToken = jwt.sign(
    {
      id: id,
      email: email,
      iss: "reset-password",
      aud: "thesisgame.app",
    },
    process.env.JWT_RESET_SECRET as string,
    { expiresIn: "1d" }
  );

  return resetToken;
};
