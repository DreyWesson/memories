import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalReducer from "../features/post/modalSlice";
import postsReducer from "../features/post/postsSlice";
import authReducer from "../features/authSlice";

function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      next(action);
    };
  };
}

export default configureStore({
  reducer: {
    posts: postsReducer,
    modal: modalReducer,
    auth: authReducer,
    middleware: [...getDefaultMiddleware(), loggerMiddleware],
  },
});
