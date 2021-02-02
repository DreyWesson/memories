import axios from "axios";

const url = "https://insta-memories.herokuapp.com/posts";

const fetchPosts = () => axios.get(url),
  createPost = (newPost) => axios.post(url, newPost),
  updatePost = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData),
  deletePost = (id) => axios.delete(`${url}/${id}`),
  likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export { fetchPosts, createPost, updatePost, deletePost, likePost };
