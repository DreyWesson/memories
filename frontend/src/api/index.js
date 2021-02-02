import axios from "axios";

const fetchPosts = () => axios.get("posts"),
  createPost = (newPost) => axios.post("posts", newPost),
  updatePost = (id, updatedData) => axios.patch(`posts/${id}`, updatedData),
  deletePost = (id) => axios.delete(`posts/${id}`),
  likePost = (id) => axios.patch(`posts/${id}/likePost`);

export { fetchPosts, createPost, updatePost, deletePost, likePost };
