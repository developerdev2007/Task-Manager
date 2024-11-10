"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    status: {
        type: String,
        enum: ["To Do", "In Progress", "Completed", "Timeout"],
        default: "To Do",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    priority: {
        type: String,
        enum: ["Low", "High"],
        default: "Low",
    },
    deadLine: {
        type: Date,
        required: [true, "Deadline is required"],
    },
}, {
    timestamps: true,
    collection: "Tasks",
    autoIndex: true,
});
const Task = mongoose_1.default.model("Task", TaskSchema);
exports.default = Task;
