"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.streamingFetch = exports.deleteTask = exports.updateTask = exports.getTaskById = exports.createTask = exports.getTasks = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const ErrorHandler_1 = __importDefault(require("../utils/ErrorHandler"));
const catchAsyncHandler_1 = require("../utils/catchAsyncHandler");
const getTwitchAccessToken_1 = __importDefault(require("../utils/getTwitchAccessToken"));
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
/**get all tasks✅*/
exports.getTasks = (0, catchAsyncHandler_1.catchAsyncErrors)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel_1.default.find(); //** fetching the tasks */
        res.status(200).json(tasks); //Sending tasks
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500)); //senDIng Error meSsage
    }
}));
/** creating a task and sending  ✅ */
exports.createTask = (0, catchAsyncHandler_1.catchAsyncErrors)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, status, createdAt, priority, deadLine, } = req.body;
        if (!title || !description) {
            return next(new ErrorHandler_1.default("All fields are required", 400)); // checking the fields
        }
        const task = yield taskModel_1.default.create({
            title,
            description,
            status,
            createdAt,
            priority,
            deadLine,
        });
        // console.log({ Task: task });
        res
            .status(201)
            .json({ message: "Task Created Successfully", Task: task }); //sending message and task that is created
    }
    catch (error) {
        return next(new ErrorHandler_1.default(error.message, 500));
    }
}));
/** get Task by id */ /** get Task by id ✅*/
exports.getTaskById = (0, catchAsyncHandler_1.catchAsyncErrors)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            return next(new ErrorHandler_1.default("Invalid ID of Task", 400));
        }
        const task = yield taskModel_1.default.findById(req.params.id);
        if (!task) {
            return next(new ErrorHandler_1.default("Task not Found", 400));
        }
        res.status(200).json(task);
    }
    catch (error) {
        // console.log(error);
        return next(new ErrorHandler_1.default(error.message, 400));
    }
}));
/**updating a task  ✅ */
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield taskModel_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task Updated Successfully", task });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can't update task, try again later" });
    }
});
exports.updateTask = updateTask;
/** Deleting a task */
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
        }
        const task = yield taskModel_1.default.findByIdAndDelete(id);
        if (!task) {
            res.status(404).json({ message: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task Deleted Successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can't delete task, try again later" });
    }
});
exports.deleteTask = deleteTask;
/** Streaming  */
exports.streamingFetch = (0, catchAsyncHandler_1.catchAsyncErrors)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = yield (0, getTwitchAccessToken_1.default)();
        const response = yield axios_1.default.get("https://api.twitch.tv/helix/streams", {
            headers: {
                "Client-ID": process.env.TWITCH_CLIENT_ID,
                Authorization: `Bearer ${accessToken}`,
            },
        });
        res.status(200).json(response === null || response === void 0 ? void 0 : response.data);
    }
    catch (error) {
        console.error("Error fetching Twitch data:", error);
        next(new ErrorHandler_1.default("Error fetching Twitch data", 500));
    }
}));
