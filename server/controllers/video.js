// import { VideoSchema } from '../models/Video.js'
// export const testVideo = new Video({
//     title: "Lost love" ,
//     desc: "Learn English through stories - Level 1",
//     videoUrl:"https://youtu.be/qtHy_DmOmLE",
//     views: 5,

// })

// testVideo.save()
// .then((doc) => {
//     console.log(doc);
// })
// .catch(error => {
//     console.error(`Error occurred: ${error}`)
// })

export const testVideo = (req,res) => res.json("testVideo called")