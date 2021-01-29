import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/post/modalSlice";
import postsReducer from "../features/post/postsSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    modal: modalReducer,
  },
});
