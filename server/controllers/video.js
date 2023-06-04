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
        // console.error(`Error occurred: ${error}`)
    }
}