import Comment from "../models/Comment.js";

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuestion = async (req, res) => {
  const question = req.body;
  const newQuestion = new Comment(question);
  try {
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createAnswer = async (req, res) => {
  const answer = req.body;
  const newAnswer = new Comment(answer);
  try {
    await newAnswer.save();
    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
