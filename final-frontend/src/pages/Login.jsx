import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import {
  errorToast,
  loadingToast,
  successToast,
} from "../redux/slices/toastSlice";
import { login } from "../redux/slices/authSlice";

const validationSchema = Yup.object({
  user: Yup.string("Enter your email")
    .min(2, "Username should be of minimum 2 characters length")
    .required("Username/Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await axios.post("/user/forgot-password", { email });
      console.log(response);
      navigate("/reset-password", { state: { email } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/login", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Logging in..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          dispatch(successToast(data?.data?.message));
          dispatch(login(data.data.data.token));
          navigate("/");
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
      user: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      mutate(values, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  return (
    // <Paper elevation={24}>
    <Box
      sx={{
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.secondary.main
            : t.palette.grey[700],
        minHeight: "100vh",
      }}
    >
      <Container>
        <Grid
          container
          component="main"
          sx={{
            // height: "90vh",
            paddingY: { md: 10 },
          }}
        >
          <Grid
            item
            xs={false}
            sm={false}
            md={6}
            sx={{
              backgroundImage: (t) =>
                t.palette.mode === "light"
                  ? "url(./login.webp)"
                  : "url(https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1600)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "start",
            }}
          />
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            component={Paper}
            elevation={0}
            square
            sx={{ my: { xs: 2, md: 0 }, height: "100%" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "green" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1, width: "100%" }}
              >
                <TextField
                  fullWidth
                  id="user"
                  name="user"
                  color="focusInput"
                  autoComplete="off"
                  label="Username/Email"
                  value={formik.values.user}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={formik.touched.user && Boolean(formik.errors.user)}
                  helperText={formik.touched.user && formik.errors.user}
                  sx={{ marginY: 2 }}
                />

                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  color="focusInput"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
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

                <Grid item xs>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        id="remember"
                        name="remember"
                        checked={formik.values.remember}
                        onChange={formik.handleChange}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* <Link to="/forgot-password">Forgot password?</Link> */}
                    <Button variant="text" color="info" onClick={handleOpen}>
                      Forgot Password?
                    </Button>
                    <Dialog open={openModal} onClose={handleClose} fullWidth>
                      <Box
                        component="form"
                        onSubmit={sendOTP}
                        sx={{ backgroundColor: "skyblue" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            m: 3,
                          }}
                        >
                          <Box
                            component="img"
                            src="logo.png"
                            height={50}
                            width={50}
                          />
                        </Box>
                        <DialogTitle>Forgot Password?</DialogTitle>

                        <DialogContent>
                          <DialogContentText>
                            Please enter your email below. We will provide a
                            code to reset your password.
                          </DialogContentText>
                          <TextField
                            fullWidth
                            size="small"
                            id="email"
                            type="email"
                            name="email"
                            color="focusInput"
                            autoComplete="off"
                            label="Email"
                            value={email}
                            onChange={handleEmailChange}
                            sx={{ marginY: 2 }}
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleClose}
                            color="error"
                            variant="contained"
                          >
                            Cancel
                          </Button>
                          <Button
                            type="submit"
                            onClick={sendOTP}
                            color="success"
                            variant="contained"
                          >
                            Send OTP
                          </Button>
                        </DialogActions>
                      </Box>
                    </Dialog>
                  </Grid>
                  <Grid item>
                    New Here? <Link to="/register">Signup</Link>
                  </Grid>
                </Grid>
                <Divider sx={{ mt: 2 }}>
                  {" "}
                  <Chip label="OR" />
                </Divider>
                <Button
                  type="submit"
                  fullWidth
                  color="secondary"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <Google sx={{ mr: 1 }} />
                  Sign In with Google
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    // </Paper>
  );
}
