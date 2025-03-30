import { Router } from "express";
import { createPoint } from "../controller/leader-board-controller";
const leaderBoardRoute = Router();

leaderBoardRoute.post("/create-point", createPoint);

export default leaderBoardRoute;
