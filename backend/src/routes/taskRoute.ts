import express from "express";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  streamingFetch,
  updateTask,
} from "../controllers/taskController";
const taskRoutes = express.Router();

taskRoutes.get("/tasks", getTasks); //all tasks
taskRoutes.get("/task/:id", getTaskById); // by id
taskRoutes.post("/task", createTask); // create task
taskRoutes.delete("/task/:id", deleteTask); //delete task
taskRoutes.put("/task/:id", updateTask); // update task
/** Streaming  */

taskRoutes.get("/streaming", streamingFetch);

export default taskRoutes;
