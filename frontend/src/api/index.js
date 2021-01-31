import axios from "axios";

export const fetchPosts = () => axios.get("/posts");
export const createPost = (newPost) => axios.post("/posts", newPost);
export const updatePost = (id, updatedData) =>
  axios.patch(`/posts/${id}`, updatedData);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
