import express from 'express';
import { updateUser, deleteUser, getUser, like, dislike } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const userRouter = express.Router();
 
// update user
userRouter.put('/:id', verifyToken, updateUser)
// get user
userRouter.get('/find/:id', getUser)
// delete user
userRouter.delete('/:id', deleteUser)
// like a video
userRouter.put('/like/:videoId', like)
// dislike a video
userRouter.put('/dislike/:videoId', dislike)
export { userRouter }