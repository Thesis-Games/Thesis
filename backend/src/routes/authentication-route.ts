import { Router } from "express";
import {
  signup,
  signin,
  verifyToken,
  profile,
} from "../controller/authentication-controller";
import { authenticationMiddleware } from "../middleware/authentication-middleware";
const authenticationRouter = Router();

authenticationRouter.post("/signup", signup);
authenticationRouter.post("/signin", signin);
authenticationRouter.get("/verify-token", verifyToken);
authenticationRouter.get("/profile", authenticationMiddleware, profile);

export default authenticationRouter;
