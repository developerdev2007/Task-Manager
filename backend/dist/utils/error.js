"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const ErrorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server error";
    //***Wrong mongodb Id */
    if (err.name === "CastError") {
        const message = `Resource not Found Invalid ${err.path}`;
        err = new ErrorHandler_1.default(message, 400);
    }
    //**duplicate key error */
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)}entered `;
        err = new ErrorHandler_1.default(message, 400);
    }
    //**wrong jwt error  */
    if (err.name === "JsonWebTokenError") {
        const message = "JSON web token  is Invalid , try Again";
        err = new ErrorHandler_1.default(message, 400);
    }
    //***JWT Expire error */
    if (err.name === "TokenExpiredError") {
        const message = `JSON web Token has been expired `;
        err = new ErrorHandler_1.default(message, 400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
