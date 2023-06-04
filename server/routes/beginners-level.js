import express from 'express';
import { testVideo } from '../controllers/video.js';

const videoRouter = express.Router();

videoRouter.post('/beginners-level', testVideo); 

export { videoRouter }