import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    questions: {
      type: String,
      required: [true, "Questions are required"],
      unique: true,
    },
    answers: {
      type: String,
      unique: true,
      
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comments", CommentsSchema);
