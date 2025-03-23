import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  passoutyear: {
    type: String,
    require: true,
  },
  branch: {
    type: String,
    require: true,
  },
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: false,
    },
  ],
  refreshToken: {
    type: String
  }
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getAccessToekn = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECREATE,
    {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    }
  );
};

userSchema.methods.getRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    process.env.REFRESH_TOKEN_SECREATE,
    {
      expiresIn: process.env.EXPIRE_REFRESH_TOKEN,
    }
  );
};

const User = mongoose.model("User", userSchema);
export { User };
