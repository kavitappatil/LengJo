import mongoose from 'mongoose';
import Video  from '../models/Video.js'

export const testVideo = async (req,res, next) => {
    console.log(req.body);
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
        const videos = await Video.find({})
        res.status(200).json({ success: true, data: videos })
      } catch (error) {
        next(error)
      }
}