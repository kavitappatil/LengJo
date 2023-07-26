import Video from "../models/Video.js";

export const createVideo = async (req, res, next) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json({ success: true, data: video });
  } catch (error) {
    next(error);
  }
};

export const displayVideo = async (req, res, next) => {
  try {
    const video = await Video.find();
    res.status(200).json({ success: true, data: video });
  } catch (error) {
    next(error);
  }
};
