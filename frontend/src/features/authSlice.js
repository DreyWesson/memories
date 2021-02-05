import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    authFormData: null,
  },
  reducers: {
    setGoogleAuth: (state, { payload }) => {
      localStorage.setItem("profile", JSON.stringify({ ...payload }));
      state.authData = payload;
    },
    setLogout: (state, { payload }) => {
      localStorage.clear();
      state.authData = null;
    },
    authFormData: (state, { payload }) => {
      localStorage.setItem("profile", JSON.stringify({ ...payload }));
      state.authFormData = payload;
    },
  },
});

const formSignin = createAsyncThunk(
  "auth/formSignin",
  async ({ formData, history }, { dispatch }) => {
    const { data } = await api.signin(formData);
    dispatch(authFormData(data));
    history.push("/");
  }
);
const formSignup = createAsyncThunk(
  "auth/formSignup",
  async ({ formData, history }, { dispatch }) => {
    console.log("Got HERE CREATE ASYNC");
    const { data } = await api.signup(formData);
    console.log("DATA: ", data);
    dispatch(authFormData(data));
    history.push("/");
  }
);
export { formSignin, formSignup };
export const { setGoogleAuth, setLogout, authFormData } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
