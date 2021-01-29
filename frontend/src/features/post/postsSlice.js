import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    hasErrors: false,
  },
  reducers: {
    getPosts: (state) => {
      state.loading = true;
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPostsFailure: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addPost: (state, action) => {
      console.log("ADDPOST");
      state.posts.push(action.payload);
    },
    editPost: (state, { payload }) => {
      state.posts.map((post) => (post._id === payload._id ? payload : post));
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  addPost,
  edit,
} = postsSlice.actions;

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (payload, { dispatch }) => {
    // Set the loading state to true
    dispatch(getPosts());
    try {
      const { data } = await api.fetchPosts();
      // Set the data
      return dispatch(getPostsSuccess(data));
    } catch (error) {
      console.log("Error");
      // Set any errors while trying to fetch
      return dispatch(getPostsFailure());
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (payload, { dispatch }) => {
    console.log(dispatch);
    try {
      const { data } = await api.createPost(payload);
      console.log(data);
      dispatch(addPost(data));
      console.log("Yellow");
      return;
    } catch (error) {
      return console.log("Failed");
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const { data } = await api.updatePost(payload);
      thunkAPI.dispatch(edit(data));
    } catch (error) {
      thunkAPI.dispatch(getPostsFailure());
    }
  }
);

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
