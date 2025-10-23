import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`Connected to the database: ${DB_Name} successfully, DB_Host = ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1);
    }
};

export default connectDB;