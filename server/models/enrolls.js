import mongoose from "mongoose";

const enrolls = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    progress: {
        type: Number,
        default: 0
    }
})

const Enroll = mongoose.model('Enroll', enrolls);
export default Enroll;