import mongoose from "mongoose";

export default async function connectDB(url: string): Promise<void> {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.log(`
        Error connecting to MongoDB: ${error.message} error
        ${error.stack}
        `);
  }
}
