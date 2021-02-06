import User from "../models/userSchema.js";
import ErrorHandler from "../utils/errorHandler.js";

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please provide Email and Password", 400));
  }
  try {
    let existingUser = await User.findOne({ email }).select("+password");
    if (!existingUser) {
      return next(new ErrorHandler("User doesn't exist", 401));
    }
    const matchPsw = await existingUser.matchPasswords(password);
    if (!matchPsw) {
      return next(new ErrorHandler("Invalid Credentials", 401));
    }

    sendToken(existingUser, 200, res);
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
    });
    next(error);
  }
};
export const signup = async (req, res, next) => {
  const { lastName, firstName, email, password, confirmPassword } = req.body;

  const existingUser = await User.findOne({ email }).select("password");
  if (existingUser) return next(new ErrorHandler("User already exist", 400));

  if (password !== confirmPassword)
    return next(new ErrorHandler("Password doesn't match", 400));

  try {
    let user = await User.create({
      lastName,
      firstName,
      email,
      password,
    });
    sendToken(user, 201, res);
    console.log("I got here");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Figure out how to turn user to user.result
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  console.log(user);
  res.status(statusCode).json({ result: user, success: true, token });
};
