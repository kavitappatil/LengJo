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
    },
    likes: {
        type: [String],
        default: [],
    },
    dislikes: {
        type: [String],
        default: [],
    }
}, 
{ timestamps: true });

export default mongoose.model('Video', VideoSchema);