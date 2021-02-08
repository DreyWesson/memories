import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    authFormData: null,
    forgotPassword: null,
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
      // console.log(payload);
      localStorage.setItem("profile", JSON.stringify({ ...payload }));
      state.authFormData = payload;
    },
    forgotpasswordReducer: (state, { payload }) => {
      // console.log(payload);
      state.forgotPassword = payload;
    },
  },
});

const formSignin = createAsyncThunk(
  "auth/formSignin",
  async ({ formData, history }, { dispatch }) => {
    try {
      const { data } = await api.signin(formData);
      dispatch(authFormData(data));
      history.push("/");
    } catch (error) {
      console.log("Invalid credentials");
    }
  }
);
const formSignup = createAsyncThunk(
  "auth/formSignup",
  async ({ formData, history }, { dispatch }) => {
    // console.log(formData);
    const { data } = await api.signup(formData);
    dispatch(authFormData(data));
    history.push("/");
  }
);
const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (userEmail, { dispatch }) => {
    console.log(userEmail);
    const { data } = await api.forgotpassword(userEmail);
    console.log(data);
    dispatch(forgotpasswordReducer(data));
  }
);
export { formSignin, formSignup, forgotPassword };
export const {
  setGoogleAuth,
  setLogout,
  authFormData,
  forgotpasswordReducer,
} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
