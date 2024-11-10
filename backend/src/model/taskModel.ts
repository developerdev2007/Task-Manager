import mongoose, { Schema, Document } from "mongoose";
export interface TaskInterface extends Document {
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Completed" | "Timeout";
  createdAt: Date;
  priority: "Low" | "High";
  deadLine: Date;
}
const TaskSchema = new mongoose.Schema<TaskInterface>(
  {
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
  },
  {
    timestamps: true,
    collection: "Tasks",
    autoIndex: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
