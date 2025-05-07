"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const level_controller_1 = require("../controller/level-controller");
const levelRoute = (0, express_1.Router)();
levelRoute.get("/:category", level_controller_1.getFinishLevel);
levelRoute.post("/", level_controller_1.getLevel);
levelRoute.post("/validate", level_controller_1.levelValidation);
exports.default = levelRoute;
