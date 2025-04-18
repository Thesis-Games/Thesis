"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongodb_connection_1 = __importDefault(require("./config/mongodb-connection"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const error_handler_1 = require("./middleware/error-handler");
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(error_handler_1.errorHandler);
(0, mongodb_connection_1.default)().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
