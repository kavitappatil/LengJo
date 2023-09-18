import express from "express";
import cors from "cors";
import { getVideo, getVideoByTitle, displayVideo, createVideo, displayVideos, searchVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

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
videoRouter.get("/beginners-level/search", searchVideo);
videoRouter.get("/beginners-level", displayVideos);
videoRouter.get("/beginners-level/:id", displayVideo);
videoRouter.post("/beginners-level", createVideo);
videoRouter.get("/beginners-level/:videoId", getVideo);
videoRouter.put("/beginners-level/:videoId", verifyToken);
videoRouter.get("/title/:title", getVideoByTitle);

export { videoRouter };
