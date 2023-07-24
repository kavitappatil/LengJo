import express from 'express';
import { login, signup, googleAuth } from '../controllers/auth.js';

const authRouter = express.Router();
// create a user
authRouter.post('/signup', signup) 

// sign in a user
authRouter.post('/login', login) 

//Google auth
authRouter.post('/google', googleAuth) 

export { authRouter }