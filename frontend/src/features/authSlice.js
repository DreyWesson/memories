import { createSlice } from "@reduxjs/toolkit";

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
  },
});

export const { setGoogleAuth } = authSlice.actions;
export const selectGoogleAuth = (state) => state.auth;
export default authSlice.reducer;
