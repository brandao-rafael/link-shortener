import 'dotenv/config';
import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoUri = `${process.env.MONGO_URL}/linkShortener`;
  console.log('MONGO_URL:', process.env.MONGO_URL);
  console.log('MONGOUSER:', process.env.MONGOUSER);
  console.log('MONGOPASSWORD:', process.env.MONGOPASSWORD);
  try {
    await mongoose.connect(mongoUri!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDatabase;