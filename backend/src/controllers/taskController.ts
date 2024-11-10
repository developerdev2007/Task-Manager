import { NextFunction, Request, Response } from "express";
import Task, { TaskInterface } from "../model/taskModel";
import ErrorHandler from "../utils/ErrorHandler";
import { catchAsyncErrors } from "../utils/catchAsyncHandler";
import getTwitchAccessToken from "../utils/getTwitchAccessToken";
import axios from "axios";

import { configDotenv } from "dotenv";

configDotenv();
/**get all tasks✅*/
export const getTasks = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tasks: TaskInterface[] = await Task.find(); //** fetching the tasks */
      res.status(200).json(tasks); //Sending tasks
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500)); //senDIng Error meSsage
    }
  }
);
/** creating a task and sending  ✅ */
export const createTask = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {
        title,
        description,
        status,
        createdAt,
        priority,
        deadLine,
      }: TaskInterface = req.body;

      if (!title || !description) {
        return next(new ErrorHandler("All fields are required", 400)); // checking the fields
      }

      const task = await Task.create({
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
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

/** get Task by id */ /** get Task by id ✅*/
export const getTaskById = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      if (!id) {
        return next(new ErrorHandler("Invalid ID of Task", 400));
      }
      const task: TaskInterface | null = await Task.findById(req.params.id);
      if (!task) {
        return next(new ErrorHandler("Task not Found", 400));
      }
      res.status(200).json(task);
    } catch (error: any) {
      // console.log(error);
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

/**updating a task  ✅ */
export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.params.id;
    const task: TaskInterface | null = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({ message: "Task Updated Successfully", task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can't update task, try again later" });
  }
};

/** Deleting a task */
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    if (!id) {
    }
    const task: TaskInterface | null = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({ message: "Task Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Can't delete task, try again later" });
  }
};

/** Streaming  */
export const streamingFetch = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accessToken = await getTwitchAccessToken();
      const response = await axios.get("https://api.twitch.tv/helix/streams", {
        headers: {
          "Client-ID": process.env.TWITCH_CLIENT_ID,
          Authorization: `Bearer ${accessToken}`,
        },
      });
      res.status(200).json(response?.data);
    } catch (error) {
      console.error("Error fetching Twitch data:", error);
      next(new ErrorHandler("Error fetching Twitch data", 500));
    }
  }
);
