"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccountService = void 0;
const custom_error_1 = require("../utils/custom-error");
require("dotenv/config");
const nodemailer_1 = __importDefault(require("../lib/nodemailer"));
const verifyAccountService = async (token, email) => {
    const resetLink = `http://localhost:5173/page/verify-account/${token}`;
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Confirm your email",
        text: `Hi,\n\nWe received a request to reset your password. Please use the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nBarangay BonBon`,
        html: `
        <p>Click the link below to confirm your email. This link is valid for 1 day.</p>
        <a href="${resetLink}" target="_blank">${resetLink}</a>
      `,
    };
    const emailSent = await (0, nodemailer_1.default)(mailOptions);
    if (!emailSent) {
        throw new custom_error_1.CustomError("Email not sent", 404);
    }
    return {
        message: "Verification email sent successfully",
    };
};
exports.verifyAccountService = verifyAccountService;
