"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controllers/taskController");
const taskRoutes = express_1.default.Router();
taskRoutes.get("/task", taskController_1.getTasks); //all tasks
taskRoutes.get("/task/:id", taskController_1.getTaskById); // by id
taskRoutes.post("/task", taskController_1.createTask); // create task
taskRoutes.delete("/task/:id", taskController_1.deleteTask); //delete task
taskRoutes.put("/task/:id", taskController_1.updateTask); // update task
/** Streaming  */
taskRoutes.get("/streaming", taskController_1.streamingFetch);
exports.default = taskRoutes;
