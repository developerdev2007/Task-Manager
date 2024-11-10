"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRoute_1 = __importDefault(require("./routes/taskRoute"));
const db_1 = __importDefault(require("./config/db"));
const error_1 = require("./utils/error");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: "5mb" }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/test", (req, res) => {
    res.send("Hello World!, test of backend");
});
app.use("/", taskRoute_1.default);
//**error handling */
app.use(error_1.ErrorMiddleware);
//!! unknown routes
app.all("*", (req, res, next) => {
    const err = new Error(`Route ${req.originalUrl} not found  `);
    err.statusCode = 404;
    next(err);
});
console.clear();
app.listen(PORT, () => {
    (0, db_1.default)(MONGO_URI);
    console.log(`Server is listing on port ${PORT}`);
});
