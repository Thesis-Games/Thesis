"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const question_answer_js_controller_1 = require("../controller/question-answer-js-controller");
const questionJsRoute = (0, express_1.Router)();
questionJsRoute.post("/create-question", question_answer_js_controller_1.createQuestion);
questionJsRoute.get("/:category/:level", question_answer_js_controller_1.getByCategoryAndLevel);
exports.default = questionJsRoute;
