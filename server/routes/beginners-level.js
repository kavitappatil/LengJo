import express from 'express';
import { displayVideo, createVideo, displayVideos } from '../controllers/video.js';

const videoRouter = express.Router();
videoRouter.get('/beginners-level/:id', displayVideo); 
videoRouter.get('/beginners-level', displayVideos);
videoRouter.post('/beginners-level', createVideo); 

export { videoRouter }