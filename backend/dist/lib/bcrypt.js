"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTextToHashedText = exports.hashText = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashText = async (text, saltRounds = 12) => {
    try {
        const salt = await bcrypt_1.default.genSalt(saltRounds);
        const hashedText = await bcrypt_1.default.hash(text, salt);
        return hashedText;
    }
    catch (error) {
        return null;
    }
};
exports.hashText = hashText;
const compareTextToHashedText = async (plainText, hashedText) => {
    try {
        return await bcrypt_1.default.compare(plainText, hashedText);
    }
    catch (error) {
        return false;
    }
};
exports.compareTextToHashedText = compareTextToHashedText;
