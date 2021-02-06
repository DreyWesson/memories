import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../api";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    loading: false,
    posts: [],
    hasErrors: false,
    currentId: null,
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
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },
    editPost: (state, { payload }) => {
      state.posts.forEach((post) =>
        post._id === payload._id ? payload : post
      );
    },
    setCurrentId: (state, { payload }) => {
      state.currentId = payload;
    },
    removePost: (state, { payload }) => {
      state.posts.filter((post) => post._id === payload);
    },
    favPost: (state, { payload }) => {
      state.posts.forEach((post) =>
        post._id === payload._id ? payload : post
      );
    },
    // favPost: ({ posts }, { payload }) => {
    //   posts.forEach((post) => (post._id === payload._id ? payload : post));
    // },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  addPost,
  editPost,
  setCurrentId,
  removePost,
  favPost,
} = postsSlice.actions;

const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (payload, { dispatch }) => {
      dispatch(getPosts());
      const { data } = await api.fetchPosts();
      dispatch(getPostsSuccess(data));
    }
  ),
  createPost = createAsyncThunk(
    "posts/createPost",
    async ({ postData }, { dispatch }) => {
      console.log(postData);
      const { data } = await api.createPost(postData);
      console.log(data);
      return dispatch(addPost(data));
    }
  ),
  updatePost = createAsyncThunk(
    "posts/updatePost",
    async ({ currentId, postData }, { dispatch }) => {
      const { data } = await api.updatePost(currentId, postData);
      dispatch(editPost(data));
    }
  ),
  deletePost = createAsyncThunk(
    "posts/deletePost",
    async ({ id }, { dispatch }) => {
      await api.deletePost(id);
      return dispatch(removePost());
    }
  ),
  likePost = createAsyncThunk(
    "posts/likePost",
    async ({ id }, { dispatch }) => {
      const { data } = await api.likePost(id);
      dispatch(favPost(data));
    }
  );
export { fetchPosts, createPost, updatePost, deletePost, likePost };

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
