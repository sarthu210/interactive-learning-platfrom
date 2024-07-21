import { compare } from "bcrypt";
import mongoose from "mongoose";

const LevelSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  course_id: mongoose.Schema.Types.ObjectId,
  name: String,
  title: String,
  subtitle: String,
  theroy: {
    p1: String,
    p2: String,
    p3: String
  },
  excersice: {
    task: String,
    note: String,
    compare: {
      type: Array,
      default: []
    },
    answer: String,
  }
});

const Level = mongoose.model('Level', LevelSchema);

export default Level;