import express from 'express';
import {
  getComments,
  createComment,
  deleteComment
  
} from "../controllers/comment.js";



const commentRouter = express.Router();

commentRouter.get("/", getComments); 
commentRouter.post("/", createComment); 
commentRouter.delete("/:id", deleteComment); 
 

export { commentRouter }