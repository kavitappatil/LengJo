import mongoose from 'mongoose';
import Video  from '../models/Video.js'

export const testVideo = async (req,res) => {
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
        res.send(newVideo)
    } catch (error) {
        console.error(`Error occurred: ${error}`)
    }
}