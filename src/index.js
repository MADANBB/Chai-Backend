//require ('dotenv').config({path: './.env'});

import dotenv from "dotenv";
import { DB_Name } from "./constants.js";   
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});
connectDB();













/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log("Connected to the database successfully");

        app.on("error", (error) => {
            console.error("Error starting the server", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Error connecting to the database", error);
        throw error;
    }
} )()
    */