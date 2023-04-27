import { createSlice } from "@reduxjs/toolkit";

const toastInitialState = {
  open: false,
  type: "info",
  message: "",
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: toastInitialState,
  reducers: {
    successToast: (state, action) => {
      state.open = true;
      state.type = "success";
      state.message = action.payload ?? "Action was successful";
    },
    errorToast: (state, action) => {
      state.open = true;
      state.type = "error";
      state.message = action.payload ?? "Something went wrong!";
    },
    loadingToast: (state, action) => {
      state.open = true;
      state.type = "info";
      state.message = action.payload ?? "Loading...";
    },
    resetToast: (state) => {
      state.open = false;
      state.type = "info";
      state.message = "";
    },
  },
});

export const { successToast, errorToast, resetToast, loadingToast } =
  toastSlice.actions;
export default toastSlice.reducer;
