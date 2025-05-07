"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyCreateAccount = exports.logout = exports.resetPassword = exports.forgotPassword = exports.profile = exports.verifyToken = exports.signin = exports.signup = void 0;
const bcrypt_1 = require("../lib/bcrypt");
const custom_error_1 = require("../utils/custom-error");
const create_authentication_1 = require("../services/create-authentication");
const check_email_existing_1 = require("../services/check-email-existing-");
const create_authentication_2 = require("../services/create-authentication");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../model/user-model");
const generate_token_1 = require("../services/generate-token");
const reset_password_service_1 = require("../services/reset-password-service");
const verify_token_1 = require("../services/verify-token");
const update_password_1 = require("../services/update-password");
const create_account_token_service_1 = require("../services/create-account-token-service");
const generate_token_2 = require("../services/generate-token");
const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const existUsername = await user_model_1.userModel.findOne({ username });
        if (existUsername) {
            throw new custom_error_1.CustomError("Username already exists", 400);
        }
        const existEmail = await user_model_1.userModel.findOne({ email });
        if (existEmail) {
            throw new custom_error_1.CustomError("Email already exists", 400);
        }
        const verifyAccountTOken = (0, generate_token_1.generateVerifyAccountCreateToken)(email, password, username);
        const { message } = await (0, create_account_token_service_1.verifyAccountService)(verifyAccountTOken, email);
        res.status(200).json({
            message: message,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.signup = signup;
const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const account = await (0, check_email_existing_1.checkEmailExisting)(email);
        if (!account) {
            throw new custom_error_1.CustomError("Account not Found", 400);
        }
        const isPasswordValid = await (0, bcrypt_1.compareTextToHashedText)(password, account.password);
        if (!isPasswordValid) {
            throw new custom_error_1.CustomError("Invalid Password", 400);
        }
        const accessToken = (0, generate_token_2.generateAcessToken)(account.id, account.email, account.username);
        const refreshToken = (0, generate_token_2.generateRefreshToken)(account.id, account.email, account.username);
        const { success_response } = await (0, create_authentication_2.createSessionAndDeleteToken)(account.id, refreshToken);
        if (!success_response) {
            throw new custom_error_1.CustomError("Failed to create session", 500);
        }
        res.cookie("auth_accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 1000,
        });
        res.cookie("auth_refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({
            accessToken,
            refreshToken,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.signin = signin;
const verifyToken = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader?.split(" ")[1];
    if (!token) {
        throw new custom_error_1.CustomError("No token provided", 401);
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
        res.status(200).json({
            decoded,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.verifyToken = verifyToken;
const profile = async (req, res, next) => {
    const session = req.session;
    try {
        res.json({
            message: "Profile fetched successfully",
            user: session?.account_id,
            email: session?.email,
            username: session?.username,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.profile = profile;
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const existingEmail = await (0, check_email_existing_1.checkEmailExisting)(email);
        if (!existingEmail) {
            throw new custom_error_1.CustomError("Email not Found", 400);
        }
        const resetToken = (0, generate_token_1.generateResetToken)(existingEmail.id, existingEmail.email);
        const { message } = await (0, reset_password_service_1.forgotPasswordService)(resetToken, existingEmail.email);
        res.status(200).json({
            message: message,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.forgotPassword = forgotPassword;
const resetPassword = async (req, res, next) => {
    try {
        const { token, newpassword } = req.body;
        if (!token) {
            throw new custom_error_1.CustomError("No token provided", 401);
        }
        const { id, email } = await (0, verify_token_1.verifyResetPasswordToken)(token);
        const findEmail = await (0, check_email_existing_1.checkEmailExisting)(email);
        if (!findEmail) {
            throw new custom_error_1.CustomError("Account not Found", 400);
        }
        const hashedNewPassword = await (0, bcrypt_1.hashText)(newpassword);
        if (!hashedNewPassword) {
            throw new custom_error_1.CustomError("Failed to hash password", 500);
        }
        const newPassword = await (0, update_password_1.updatePassword)(id, hashedNewPassword);
        res.status(200).json({
            message: "Password updated successfully",
            user: newPassword,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.resetPassword = resetPassword;
const logout = (req, res) => {
    res.clearCookie("auth_accessToken");
    res.clearCookie("auth_refreshToken");
    res.status(200).json({ message: "Logged out successfully" });
};
exports.logout = logout;
const verifyCreateAccount = async (req, res, next) => {
    try {
        const { token } = req.params;
        if (!token) {
            throw new custom_error_1.CustomError("No token provided", 401);
        }
        const { username, email, password } = await (0, verify_token_1.verifyAccountCreateToken)(token);
        const hashedPassword = await (0, bcrypt_1.hashText)(password);
        if (!hashedPassword) {
            throw new custom_error_1.CustomError("Failed to hash password", 500);
        }
        const { user, Success_response } = await (0, create_authentication_1.createAuthenticationAccount)({
            username,
            email,
            password: hashedPassword,
        });
        res.status(200).json({
            message: Success_response,
            user: user,
            success: true,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.verifyCreateAccount = verifyCreateAccount;
