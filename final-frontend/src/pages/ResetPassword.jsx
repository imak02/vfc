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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = Yup.object({
  otp: Yup.string()
    .min(6, "Otp must contain at least six digits")
    .max(6, "Otp can contain at most six digits")
    .required("Otp is required"),
  password: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Both passwords do not match."
  ),
});

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  console.log(email);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: email,
      otp: "",
      password: "",
      password2: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios({
          method: "post",
          url: `/user/reset-password`,
          data: values,
        });

        console.log(response);
        if (response) {
          resetForm();
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
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
      <Paper elevation={2} sx={{ p: 3, bgcolor: "skyblue" }}>
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
        <Typography variant="h6">Reset password</Typography>
        <Typography variant="body2">
          Please enter the otp you have received via email and a new password.
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

          <TextField
            fullWidth
            size="small"
            id="password"
            type="password"
            name="password"
            color="focusInput"
            autoComplete="off"
            label="New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ marginY: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            size="small"
            id="password2"
            name="password2"
            label="Confirm Password"
            color="focusInput"
            type={showPassword2 ? "text" : "password"}
            value={formik.values.password2}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.password2 && Boolean(formik.errors.password2)}
            helperText={formik.touched.password2 && formik.errors.password2}
            sx={{ marginY: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
            type="submit"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Resetting..." : "Reset"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ResetPassword;
