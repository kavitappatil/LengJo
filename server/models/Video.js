import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({ 
    title: { 
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    }
}, 
{ timestamps: true });

export { VideoSchema };