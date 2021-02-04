import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a Password"],
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  // id: String,
});

// Hash password before signing user up
UserSchema.pre("save", async function (next) {
  !this.isModified("password") && next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// Combine firstname and lastname
UserSchema.virtual("fullName").get(function () {
  return `${this.firstname} ${this.lastname}`;
});
// Hash password before saving
// UserSchema.methods.matchPasswords = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };
// Store id information in the token
UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);
export default User;
