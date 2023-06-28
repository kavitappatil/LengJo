import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { userRouter } from "./routes/users.js"
import { videoRouter } from "./routes/beginners-level.js"
import { authRouter } from "./routes/auth.js";
import { commentRouter } from "./routes/discussion.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
// MongoDb connection
const connect = () => {
    mongoose.connect(process.env.MONGO_DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {throw error});
}

app.get('/', (req, res) => {
    res.json({ message: "This is LangJo App 🏴󠁧󠁢󠁥󠁮󠁧󠁿!" });
})

app.use(express.json());
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/videos", videoRouter)
app.use("/api/comments", commentRouter)

// handle errors
app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message || "Something went wrong"
   return res.status(status).json({ 
    success: false,
    status,
    message
   });
  });


app.listen(PORT, () => {
    connect()
    console.log(`Listening on port ${PORT}`);
  });
  