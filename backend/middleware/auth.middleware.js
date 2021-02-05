import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import ErrorHandler from "../utils/errorHandler.js";

export const shield = async (req, res, next) => {
  let token;
  // const { authorization } = req.headers;
  // if (authorization && authorization.startsWith("Bearer")) {
  //   token = authorization.split(" ")[1];
  // }
  // console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    // console.log(token);
  }
  console.log("THIS TOKEN", !token);

  if (!token) {
    return next(new ErrorHandler("You don't have access to this route", 401));
  }
  // const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // const email = await User.findById(decoded.email);
  // console.log(email);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // DOUBLE JEOPARDY
    const user = await User.findById(decoded.id);
    const email = await User.findOne({ email: decoded.email });

    if (!user && !email) {
      return next(new ErrorHandler("No user found with this ID", 404));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new ErrorHandler("You don't have access to this route", 401));
  }
};
