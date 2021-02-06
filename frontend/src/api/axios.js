import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://insta-memories.herokuapp.com",
});
// instance.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });
export default instance;
