import { Router } from "express";
import {
  signup,
  signin,
  verifyToken,
  profile,
  forgotPassword,
  resetPassword,
  logout,
} from "../controller/authentication-controller";
import { authenticationMiddleware } from "../middleware/authentication-middleware";
const authenticationRouter = Router();

authenticationRouter.post("/signup", signup);
authenticationRouter.post("/signin", signin);
authenticationRouter.get("/verify-token", verifyToken);
authenticationRouter.get("/profile", authenticationMiddleware, profile);
authenticationRouter.post("/forgot-password", forgotPassword);
authenticationRouter.post("/reset-password", resetPassword);
authenticationRouter.post("/logout", logout);

export default authenticationRouter;
