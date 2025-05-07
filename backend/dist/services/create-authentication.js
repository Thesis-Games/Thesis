"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSessionAndDeleteToken = exports.createAuthenticationAccount = void 0;
const account_model_1 = require("../model/account-model");
const user_model_1 = require("../model/user-model");
const custom_error_1 = require("../utils/custom-error");
const session_model_1 = require("../model/session-model");
const createAuthenticationAccount = async ({ username, password, email, }) => {
    const existingUser = await account_model_1.accountModel.findOne({ email });
    if (existingUser) {
        throw new custom_error_1.CustomError("Account with this email already exists", 409);
    }
    const createUserAccount = await account_model_1.accountModel.create({
        username,
        email,
        password,
    });
    if (!createUserAccount) {
        throw new custom_error_1.CustomError("Failed to create user account", 500);
    }
    await user_model_1.userModel.create({
        username,
        email,
        user_id: createUserAccount._id,
    });
    return {
        user: createUserAccount,
        Success_response: "Account created successfully",
    };
};
exports.createAuthenticationAccount = createAuthenticationAccount;
const createSessionAndDeleteToken = async (id, refresh_token) => {
    const deleteToken = await session_model_1.sessionModel.deleteMany({ account_id: id });
    if (!deleteToken) {
        throw new custom_error_1.CustomError("Failed to delete token", 500);
    }
    const createSession = await session_model_1.sessionModel.create({
        account_id: id,
        refresh_token: refresh_token,
    });
    if (!createSession) {
        throw new custom_error_1.CustomError("Failed to create session", 500);
    }
    return {
        success_response: true,
    };
};
exports.createSessionAndDeleteToken = createSessionAndDeleteToken;
