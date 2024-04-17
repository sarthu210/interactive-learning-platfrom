import mongoose from "mongoose";

const course  = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
})

const Course = mongoose.model('Course', course);
export default Course;