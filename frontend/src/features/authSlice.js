import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
    authFormData: null,
    forgotPassword: null,
    reset: null,
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
    forgotPasswordReducer: (state, { payload }) => {
      // console.log(payload);
      state.forgotPassword = payload;
    },
    resetPasswordReducer: (state, { payload }) => {
      console.log(payload);
      console.log(state);
      state.reset = payload;
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
    dispatch(forgotPasswordReducer(data));
  }
);

const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ passwordDetails, match, history }, { dispatch }) => {
    console.log(match);
    const { data } = await api.resetpassword(passwordDetails, match);
    console.log(data);
    dispatch(resetPasswordReducer(data));
    history.push("/auth");
  }
);
export { formSignin, formSignup, forgotPassword, resetPassword };
export const {
  setGoogleAuth,
  setLogout,
  authFormData,
  forgotPasswordReducer,
  resetPasswordReducer,
} = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
