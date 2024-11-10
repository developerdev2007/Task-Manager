import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoute";
import connectDB from "./config/db";
import { ErrorMiddleware } from "./utils/error";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "";

app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello World!, test of backend");
});
app.use("/", taskRoutes);
//**error handling */

app.use(ErrorMiddleware);
//!! unknown routes

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found  `) as any;
  err.statusCode = 404;
  next(err);
});

console.clear();

app.listen(PORT, () => {
  connectDB(MONGO_URI);
  console.log(`Server is listing on port ${PORT}`);
});
