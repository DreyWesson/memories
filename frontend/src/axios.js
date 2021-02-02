import axios from "axios";

export const instance = axios.create({
  baseURL: "https://insta-memories.herokuapp.com/posts",
});
export default instance;
