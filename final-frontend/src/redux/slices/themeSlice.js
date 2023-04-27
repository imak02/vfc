import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    dark: (state) => {
      state.value = "dark";
    },
    light: (state) => {
      state.value = "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { light, dark } = themeSlice.actions;

export default themeSlice.reducer;
