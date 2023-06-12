import express from 'express';
import { displayVideo, createVideo } from '../controllers/video.js';
// import {  } from '../controllers/video.js';

const videoRouter = express.Router();
videoRouter.get('/beginners-level', displayVideo); 
videoRouter.post('/beginners-level', createVideo); 

export { videoRouter }