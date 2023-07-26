import 'dotenv/config';
import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoUri = `${process.env.MONGO_URL}`;
  try {
    await mongoose.connect(mongoUri!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDatabase;