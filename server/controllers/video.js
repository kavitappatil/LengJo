import mongoose from 'mongoose';
import Video  from '../models/Video.js'

export const createVideo = async (req,res, next) => {
    try {
        const newVideo = new Video(req.body)
        // const newVideo = new Video ({
        //     title: "Lost love" ,
        //     desc: "Learn English through stories - Level 1",
        //     videoUrl:"https://youtu.be/qtHy_DmOmLE",
        //     views: 5,
        // })
        await newVideo.save();
        res.status(200).json("Video successfully added")
    } catch (error) {
        next(error);
    }
}

export const displayVideo = async (req, res, next) => {
    try {
        const videoId = req.params.id;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: 'Video not found' });
          }
        res.status(200).json({ success: true, data: video })
      } catch (error) {
        next(error)
      }
}

export const displayVideos = async (req, res, next) => {
    try {
        const videos = await Video.find({})
        res.status(200).json({ success: true, data: videos })
      } catch (error) {
        next(error)
      }
}
