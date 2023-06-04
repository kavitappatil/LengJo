import express from 'express';
import { testVideo } from '../controllers/video.js';

const videoRouter = express.Router();

videoRouter.get('/beginners-level', testVideo); 

export { videoRouter }