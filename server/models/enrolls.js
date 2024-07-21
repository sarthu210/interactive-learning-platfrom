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
    },
    Total_Levels: {
        type: Number,
        default: 3
    },
    Level1:{
        type: Boolean,
        default: false
    },
    Level2:{
        type: Boolean,
        default: false
    },
    Level3:{
        type: Boolean,
        default: false
    }
})

const Enroll = mongoose.model('Enroll', enrolls);
export default Enroll;