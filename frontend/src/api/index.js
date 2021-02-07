import axios from "./axios";

// This is important for our routes auth.middleware to work
axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Posts APIs
const fetchPosts = () => axios.get("/posts"),
  createPost = (newPost) => axios.post("/posts", newPost),
  updatePost = (id, updatedData) => axios.patch(`/posts/${id}`, updatedData),
  deletePost = (id) => axios.delete(`/posts/${id}`),
  likePost = (id) => axios.patch(`/posts/${id}/likePost`);

// Auth APIs
const signin = (formData) => axios.post("/user/signin", formData),
  signup = (formData) => axios.post("/user/signup", formData);

export {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  signin,
  signup,
};
