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
      state.posts.push(action.payload);
    },
    editPost: (state, { payload }) => {
      state.posts.forEach((post) =>
        post._id === payload._id ? payload : post
      );
    },
  },
});

export const {
  getPosts,
  getPostsSuccess,
  getPostsFailure,
  addPost,
  editPost,
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
  async (payload, { dispatch }) => {
    const { data } = await api.createPost(payload);
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

// export const updatePost = (id, post) => async (dispatch) => {
//   const { data } = await api.updatePost(id, post);
//   return dispatch(editPost(data));
// };

export const selectPosts = (state) => state.posts;
export default postsSlice.reducer;
