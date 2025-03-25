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
    { expiresIn: "10s" }
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
