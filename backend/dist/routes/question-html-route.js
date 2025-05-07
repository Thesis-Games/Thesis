"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const question_answer_html_controller_1 = require("../controller/question-answer-html-controller");
const questionHtmlRoute = (0, express_1.Router)();
questionHtmlRoute.post("/create-question", question_answer_html_controller_1.createQuestion);
questionHtmlRoute.get("/:category/:level", question_answer_html_controller_1.getByCategoryAndLevel);
exports.default = questionHtmlRoute;
