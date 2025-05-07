"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailExisting = void 0;
const account_model_1 = require("../model/account-model");
const checkEmailExisting = async (email) => {
    const existingUser = await account_model_1.accountModel.findOne({ email });
    return existingUser;
};
exports.checkEmailExisting = checkEmailExisting;
