import axios from "./axios";

const fetchPosts = () => axios.get("/"),
  createPost = (newPost) => axios.post("/", newPost),
  updatePost = (id, updatedData) => axios.patch(`/${id}`, updatedData),
  deletePost = (id) => axios.delete(`/${id}`),
  likePost = (id) => axios.patch(`/${id}/likePost`);

export { fetchPosts, createPost, updatePost, deletePost, likePost };
