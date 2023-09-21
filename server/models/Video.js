import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      unique: true,
    },
    videoUrl: {
      type: String,
      required: [true, "Video link is required"],
      unique: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
    introduction: {
      type: String,
      required: [true, "introduction link is required"],
      unique: true,
    },
    noun: {
      type: String,
      required: [true, "noun link is required"],
      unique: true,
    },
    verb: {
      type: String,
      required: [true, "verb link is required"],
      unique: true,
    },
    adjective: {
      type: String,
      required: [true, "adjective link is required"],
      unique: true,
    },
    transcript: {
      type: String,
      required: [true, "transcript link is required"],
      unique: true,
    },
    que1: {
      type: String,
      required: [true, "que1 link is required"],
      unique: true,
    },
    ans1: {
      type: String,
      required: [true, "ans1 link is required"],
      unique: true,
    },
    option1: {
      type: String,
      required: [true, "option1 link is required"],
      unique: true,
    },
    que2: {
      type: String,
      required: [true, "que2 link is required"],
      unique: true,
    },
    ans2: {
      type: String,
      required: [true, "ans2 link is required"],
      unique: true,
    },
    option2: {
      type: String,
      required: [true, "option2 link is required"],
      unique: true,
    },
    que3: {
      type: String,
      required: [true, "que3 link is required"],
      unique: true,
    },
    ans3: {
      type: String,
      required: [true, "ans3 link is required"],
      unique: true,
    },
    option3: {
      type: String,
      required: [true, "option3 link is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", VideoSchema);
