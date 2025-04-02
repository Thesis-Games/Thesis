import { Router } from "express";
import {
  getFinishLevel,
  getLevel,
  levelValidateBeforeProceed,
} from "../controller/level-controller";
const levelRoute = Router();

levelRoute.get("/:category", getFinishLevel);
levelRoute.post("/", getLevel);
levelRoute.post("/validate-before-proceed", levelValidateBeforeProceed);
export default levelRoute;
