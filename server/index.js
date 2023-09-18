import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import { userRouter } from "./routes/users.js";
import { videoRouter } from "./routes/beginners-level.js";
import { authRouter } from "./routes/auth.js";
import { commentRouter } from "./routes/comment.js";
import cookieParser from "cookie-parser";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization, X-Requested-With, Accept",
  })
);
const connect = () => {
  mongoose.connect(
    "mongodb+srv://chioma:chioma@cluster0.cfdz7fx.mongodb.net/?retryWrites=true&w=majority"
  );
};
app.get("/", (req, res) => {
  res.json({ message: "This is LangJo App :flag-england:!" });
});
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter); // This route will handle both "/api/videos/" and "/api/videos/:id"
app.use("/api/comments", commentRouter);
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});
connect();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
