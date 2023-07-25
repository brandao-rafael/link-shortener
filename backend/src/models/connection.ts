import mongoose from "mongoose";
import 'dotenv/config';

const connectToDatabase = (mongoUri = process.env.MONGO_URI) => mongoose.connect(mongoUri!);

export default connectToDatabase;