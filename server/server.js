import dotenv from 'dotenv';
dotenv.config();

import passportSetup from './config/passport.config.js';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dbConnect from './config/mongoose.config.js';
import authRouter from './routes/auth.routes.js';
import MongoStore from 'connect-mongo';
import passport from 'passport';

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

dbConnect(DB_URI, DB_NAME);

const app = express();

app.use(
    cors({ credentials: true, origin: process.env.CLIENT_URI }),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        resave: false,
        saveUninitialized: false,
        name: "AuthCookie",
        secret: process.env.COOKIE_SECRET,
        cookie: { secure: process.env.MODE === "production" },
        store: MongoStore.create({
            mongoUrl: DB_URI,
            mongoOptions: { dbName: DB_NAME }
        })
    }),
    passport.initialize(),
    passport.session()
);

app.use("/api/auth", authRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Listening on port:", PORT));