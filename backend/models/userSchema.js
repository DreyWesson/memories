import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
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

// Hash password before saving and signing user up
UserSchema.pre("save", async function (next) {
  !this.isModified("password") && next();
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// Combine firstname and lastname
UserSchema.virtual("name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
// compare password before Signing in
UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};
// Store id information in the token
UserSchema.methods.getSignedToken = function () {
  // DOUBLE JEOPARDY
  // *** The BUG is here ***
  // return jwt.sign(
  //   { id: this.result._id, email: this.result.email },
  //   process.env.JWT_SECRET,
  //   {
  //     expiresIn: process.env.JWT_EXPIRE,
  //   }
  // );
  return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);
export default User;
