import express from "express";
import dotenv from "dotenv";
import { clerkClient, clerkMiddleware, getAuth } from '@clerk/express'

import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import adminRoute from "./routes/admin.route.js";
import songsRoute from "./routes/songs.route.js";
import albumsRoute from "./routes/albums.route.js";
import statsRoute from "./routes/stats.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/songs", songsRoute);
app.use("/api/albums", albumsRoute);
app.use("/api/stats", statsRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB()
});
