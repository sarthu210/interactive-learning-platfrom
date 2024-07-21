import mongoose from 'mongoose';

// Define user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  passoutyear: {
    type: String,
    require: true
  },
  branch: {
    type: String,
    require: true
  },
  course: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: false 
  }]
});

// Create and export user model
const User = mongoose.model('User', userSchema);
export default User;
