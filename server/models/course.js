import mongoose from "mongoose";

const course  = new mongoose.Schema({
    name: {
        type: String,
        require: false
    },
    total_levels: {
        type: Number,
        require: false
    },
    Levels: {
        type: Array,
        require: false
    },
})

const Course = mongoose.model('Course', course);
export default Course;