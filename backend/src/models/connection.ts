import mongoose from "mongoose";
import 'dotenv/config';

const mongodbUrl = 'mongodb://mongodb:27017/LinkShortner';

const connectToDatabase = (mongoUri = process.env.MONGO_URI || mongodbUrl) => mongoose.connect(mongoUri);

export default connectToDatabase;