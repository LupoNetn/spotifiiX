import express from "express";
import dotenv from "dotenv";
import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express'
import fileupload from 'express-fileupload'

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import adminRoute from "./routes/admin.route.js";
import songsRoute from "./routes/songs.route.js";
import albumsRoute from "./routes/albums.route.js";
import statsRoute from "./routes/stats.route.js";
import { connectDB } from "./lib/db.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve()
const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(clerkMiddleware())
app.use(fileupload({
    useTempFiles:true,
    tempFileDir: path.join(__dirname,'temp'),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024 //10MB max file size
    }
}))

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/songs", songsRoute);
app.use("/api/albums", albumsRoute);
app.use("/api/stats", statsRoute);

//error handler
app.use((err,req,res,next) => {
    res.status(500).json({message: process.env.NODE_ENV === 'production' ? 'internal server error' : err.message})
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB()
});

//todo: Soocketio will be implemented
