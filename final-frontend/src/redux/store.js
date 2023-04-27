import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import toastReducer from "./slices/toastSlice";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toast: toastReducer,
    auth: authReducer,
    themeMode: themeReducer,
  },
});
