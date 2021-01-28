import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    hasErrors: false,
  },
  reducers: {
    getPosts: (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
    },
  },
});
export const { getPosts } = postsSlice.actions;
console.log(getPosts());
export const fetchPosts = () => (dispatch) => {
  try {
    console.log("Fetchinnnnnng");
    api.fetchPosts().then(({ data }) => {
      console.log(data);
      dispatch(getPosts(data));
    });
  } catch (e) {
    console.log("ERROR");
    return console.error(e.message);
  }
};
export const selectPosts = (state) => state.posts;
export default postsSlice;
