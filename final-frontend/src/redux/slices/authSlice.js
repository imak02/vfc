import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const authInitialState = {
  isAuthenticated: Cookies.get("token") ? true : false,
  user: null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    login: (state, action) => {
      Cookies.set("token", action.payload);
      state.isAuthenticated = true;
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload}`;
    },
    logout: (state) => {
      Cookies.remove("token");
      window.location.href = "/login";
      state.isAuthenticated = false;
      state.user = null;
      axios.defaults.headers.common["Authorization"] = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
