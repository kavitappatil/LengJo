import express from "express";
import { getVideo, createVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const videoRouter = express.Router();

// get all videos
videoRouter.get("/videos", getVideo);

// create a new video
videoRouter.post("/videos", createVideo);

// get a video
videoRouter.get("/videos/:videoId", getVideo);

// put a video
videoRouter.put("/videos/:videoId", verifyToken);

export { videoRouter };
