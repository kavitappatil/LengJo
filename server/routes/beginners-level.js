import express from 'express';
import cors from "cors";
import { displayVideo, createVideo } from '../controllers/video.js';
const app = express();

// import {  } from '../controllers/video.js';

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
videoRouter.get('/beginners-level', displayVideo); 
videoRouter.post('/beginners-level', createVideo); 

export { videoRouter }