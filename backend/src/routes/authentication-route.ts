import { Router } from "express";
import { signin } from "../controller/authentication-controller";
const authenticationRouter = Router();

authenticationRouter.post("/signin", signin);

export default authenticationRouter;
