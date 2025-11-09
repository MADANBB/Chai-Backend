import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({"limit": "20kb"}));
app.use(express.urlencoded({ extended: true, limit: "20kb"}));
app.use(express.static('public'));

//Importing Routes
import userRoutes from './routes/user.routes.js';

//Using Routes
console.log("Loading user routes...");
app.use('/api/v1/users', userRoutes);

//http://localhost:8000/api/v1/users/register

export { app };