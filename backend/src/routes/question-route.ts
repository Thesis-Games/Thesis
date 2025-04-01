import { Router } from "express";
import {
  createQuestion,
  getByCategoryAndLevel,
} from "../controller/question-answer-controller";
const questionRoute = Router();

questionRoute.post("/create-question", createQuestion);
questionRoute.get("/:category/:level", getByCategoryAndLevel);

export default questionRoute;
