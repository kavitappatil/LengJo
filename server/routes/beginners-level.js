import express from 'express';
import { displayVideo, testVideo } from '../controllers/video.js';
// import {  } from '../controllers/video.js';

const videoRouter = express.Router();
videoRouter.get('/beginners-level', displayVideo); 
videoRouter.post('/beginners-level', testVideo); 

export { videoRouter }