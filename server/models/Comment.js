import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: true,
      
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;
