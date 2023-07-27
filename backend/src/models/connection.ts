import 'dotenv/config';
import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoUri = 'mongodb://127.0.0.1:27017/shortenerDb';
  try {
    await mongoose.connect(mongoUri!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDatabase;