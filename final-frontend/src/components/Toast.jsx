import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  successToast,
  errorToast,
  resetToast,
} from "../redux/slices/toastSlice";

export function Toast() {
  const toastData = useSelector((state) => state.toast);

  const dispatch = useDispatch();

  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(resetToast());
  };

  return (
    <Snackbar
      open={toastData.open}
      autoHideDuration={5000}
      onClose={handleToastClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert
        onClose={handleToastClose}
        severity={toastData.type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {toastData.message}
      </Alert>
    </Snackbar>
  );
}
