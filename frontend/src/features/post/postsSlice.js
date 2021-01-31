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
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, { payload }) => {
      state.posts.forEach((post) =>
        post._id === payload._id ? payload : post
      );
    },
    setCurrentId: (state, { payload }) => {
      state.currentId = payload;
    },
    removePost: ({ posts }, { payload }) => {
      posts.filter((post) => post._id === payload);
    },
    favPost: ({ posts }, { payload }) => {
      posts.forEach((post) => (post._id === payload._id ? payload : post));
    },
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

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (payload, { dispatch }) => {
    dispatch(getPosts());
    const { data } = await api.fetchPosts();
    return dispatch(getPostsSuccess(data));
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ postData }, { dispatch }) => {
    const { data } = await api.createPost(postData);
    return dispatch(addPost(data));
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async ({ currentId, postData }, { dispatch }) => {
    const { data } = await api.updatePost(currentId, postData);
    dispatch(editPost(data));
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ id }, { dispatch }) => {
    await api.deletePost(id);
    return dispatch(removePost());
  }
);

export const likePost = createAsyncThunk(
  "posts/likePost",
  async ({ id }, { dispatch }) => {
    const { data } = await api.likePost(id);
    dispatch(favPost(data));
  }
);

// export const updatePost = (id, post) => async (dispatch) => {
//   const { data } = await api.updatePost(id, post);
//   return dispatch(editPost(data));
// };

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
