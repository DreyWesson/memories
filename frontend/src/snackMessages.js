export const snackMessages = {
  googleSuccess: "You've just signed in",
  googleError: "Google sign in unsuccessful. Try again",
  logout: "You've just logged out",
  signin: "Signin Successful!",
  signup: "Signup Successful!",
  updatePost: "Post Updating!",
  createPost: "Post Created!",
  unauthorized: "Oops, this is not your post",
  isUser: "You really need to sign in now",
  resetPasswordError: "Password reset unsuccessful",
  resetPasswordSuccess: "Password reset successful",
};

export const option = (variant) => {
  return {
    variant: variant,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };
};
