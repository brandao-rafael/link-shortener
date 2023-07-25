import 'dotenv/config';
import mongoose from "mongoose";

const connectToDatabase = async () => {
  const mongoUri = `${process.env.MONGO_URL}/linkShortener`;
  try {
    if(mongoUri.split('/').includes('undefined')) {
      throw new Error('Env variables not read');
    }
    await mongoose.connect(mongoUri!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectToDatabase;