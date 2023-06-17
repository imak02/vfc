import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("theme") || "dark",
};

export const themeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = "dark";
      localStorage.setItem("theme","dark");
    },
    light: (state) => {
      state.value = "light";
      localStorage.setItem("theme","light");

    },
  },
});

// Action creators are generated for each case reducer function
export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
