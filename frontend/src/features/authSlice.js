import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: null,
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
  },
});

const formSignin = createAsyncThunk(
  "auth/formSignin",
  async ({ formData, history }, { dispatch }) => {
    history.push("/");
  }
);
const formSignup = createAsyncThunk(
  "auth/formSignin",
  async ({ formData, history }, { dispatch }) => {
    history.push("/");
  }
);
export { formSignin, formSignup };
export const { setGoogleAuth, setLogout } = authSlice.actions;
export const selectGoogleAuth = (state) => state.auth;
export default authSlice.reducer;
