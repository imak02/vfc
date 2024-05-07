import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

const validationSchema = Yup.object({
  otp: Yup.string()
    .min(6, "Otp must contain at least six digits")
    .max(6, "Otp can contain at most six digits")
    .required("Otp is required"),
});

const VerifyUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = location?.state?.emailForValidation;

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/user/verify", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Verifying..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);
          dispatch(successToast(data?.data?.message));
          navigate("/login");
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          dispatch(errorToast(error?.response?.data?.message));
        } else {
          console.log(error);
          dispatch(errorToast(error?.response?.data?.message));
        }
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      email: email,
      otp: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={2} sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
            width: { xs: "100%", md: 650 },
          }}
        >
          <Box component="img" src="logo.png" height={50} width={50} />
        </Box>
        <Typography variant="h6">Email Verification</Typography>
        <Typography variant="body2">
          Please enter the otp you have received via email to continue
          verification process.
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            fullWidth
            size="small"
            id="otp"
            type="text"
            name="otp"
            color="focusInput"
            autoComplete="off"
            label="OTP"
            value={formik.values.otp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
            sx={{ marginY: 2 }}
          />

          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default VerifyUser;
