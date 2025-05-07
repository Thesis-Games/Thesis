"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leader_board_controller_1 = require("../controller/leader-board-controller");
const leaderBoardRoute = (0, express_1.Router)();
leaderBoardRoute.post("/create-point", leader_board_controller_1.createPoint);
leaderBoardRoute.get("/", leader_board_controller_1.getLeaderBoard);
exports.default = leaderBoardRoute;
