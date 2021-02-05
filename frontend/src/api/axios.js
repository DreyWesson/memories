import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000/posts",
  // baseURL: "https://insta-memories.herokuapp.com/posts",
});
export default instance;
