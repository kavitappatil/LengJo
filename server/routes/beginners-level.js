import express from "express";
import cors from "cors";
import { displayVideo, displayVideos, createVideo } from "../controllers/video.js";
const app = express();

app.use(
  cors({
    accessControlAllowOrigin: "http://localhost:3000",
    accessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
    accessControlAllowHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    accessControlAllowCredentials: true,
  })
);
app.use(express.json());

const videoRouter = express.Router();
videoRouter.get("/beginners-level/:id", displayVideo);
videoRouter.get("/beginners-level", displayVideos);
videoRouter.post("/beginners-level", createVideo);

export { videoRouter };
