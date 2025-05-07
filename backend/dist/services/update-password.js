"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const account_model_1 = require("../model/account-model");
const custom_error_1 = require("../utils/custom-error");
const updatePassword = async (id, newpassword) => {
    const updatePassword = await account_model_1.accountModel.findOneAndUpdate({ _id: id }, { password: newpassword }, { new: true });
    if (!updatePassword) {
        throw new custom_error_1.CustomError("Failed to update password", 500);
    }
    return updatePassword;
};
exports.updatePassword = updatePassword;
