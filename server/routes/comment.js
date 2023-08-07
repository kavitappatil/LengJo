import express from 'express';
import {
  getComments,
  createQuestion,
  createAnswer,
} from "../controllers/comment.js";



const commentRouter = express.Router();

commentRouter.get("/", getComments); 
commentRouter.post("/questions", createQuestion); 
commentRouter.post("/answers", createAnswer); 

export { commentRouter }