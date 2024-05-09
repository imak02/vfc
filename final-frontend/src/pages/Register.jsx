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
  Divider,
  FormControl,
  FormHelperText,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate, redirect } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../redux/slices/toastSlice";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";

const nameRegex = /^[a-zA-Z-' ]+$/;
const userNameRegex = /^[a-z0-9_-]{3,15}$/;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^(\+977)?[0-9]{9,10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegex, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*First name is required"),
  lastName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegex, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Last name is required"),
  username: Yup.string()
    .min(3, "*Username must have 3-15 characters only")
    .max(15, "*Username must have 5-15 characters only")
    .matches(
      userNameRegex,
      "*Can contain any lower case character, digit or special symbol “_-” only"
    )
    .required("*Username is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  phone: Yup.string()
    .matches(phoneRegex, "*Phone number is not valid")
    .required("*Phone number is required"),

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
  gender: Yup.string().required("Select your gender"),
  // category: Yup.string().required("Select your role"),
  dob: Yup.date().max(new Date(), "You can't be born in the future!"),

  terms: Yup.bool().required().oneOf([true], "*Terms must be accepted"),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // function handleCredentialResponse(response) {
  //   console.log("Encoded JWT ID Token:" + response.credential);
  //   const decoded = jwtDecode(response.credential);
  //   console.log(decoded);
  // }

  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  //     use_fedcm_for_prompt: true,
  //     callback: handleCredentialResponse,
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("buttonDiv"),
  //     { theme: "outline", size: "large" } // customization attributes
  //   );
  //   // google.accounts.id.prompt();
  // }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      gender: "",
      dob: "",

      // category: "",
      terms: false,
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      let sendData = Object.assign({}, values);
      delete sendData.terms;
      delete sendData.password2;
      mutate(sendData, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  const emailForValidation = formik?.values?.email;

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/user/register", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Registering user..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          dispatch(successToast(data?.data?.message));
          navigate("/verify-user", { state: { emailForValidation } });
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

  return (
    <Box
      sx={{
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.primary.main
            : t.palette.grey[800],
        pt: 4,
        pb: 5,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        component="main"
        sx={{
          width: { md: "80vw" },
          margin: { md: " auto" },
        }}
      >
        <Grid
          item
          xs={11}
          sm={10}
          md={10}
          lg={6}
          component={Paper}
          elevation={0}
          square
          sx={{ height: "100%", margin: "0 auto" }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "green" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>

            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                size="small"
                id="firstName"
                name="firstName"
                color="primary"
                autoComplete="off"
                label="First Name"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                sx={{
                  marginBottom: 2,
                  marginRight: "1%",
                  width: { md: "49%" },
                }}
              />

              <TextField
                fullWidth
                size="small"
                id="lastName"
                name="lastName"
                color="primary"
                autoComplete="off"
                label="Last Name"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                sx={{ marginBottom: 2, marginLeft: "1%", width: { md: "49%" } }}
              />

              <TextField
                fullWidth
                size="small"
                id="username"
                name="username"
                color="primary"
                autoComplete="off"
                label="Username"
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                sx={{ marginBottom: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                id="email"
                type="email"
                name="email"
                color="primary"
                autoComplete="off"
                label="Email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ marginBottom: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                id="phone"
                name="phone"
                color="primary"
                autoComplete="off"
                label="Phone Number"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ marginBottom: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                id="password"
                name="password"
                label="Password"
                color="primary"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{
                  marginBottom: 2,
                  marginRight: { xs: 0, md: "1%" },
                  width: { xs: "100%", md: "49%" },
                }}
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
                color="primary"
                type={showPassword2 ? "text" : "password"}
                variant="outlined"
                value={formik.values.password2}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.password2 && Boolean(formik.errors.password2)
                }
                helperText={formik.touched.password2 && formik.errors.password2}
                sx={{
                  marginBottom: 2,
                  marginLeft: { xs: 0, md: "1%" },
                  width: { xs: "100%", md: "49%" },
                }}
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

              <TextField
                id="gender"
                name="gender"
                size="small"
                select
                label="Gender"
                value={formik.values.gender}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.gender && Boolean(formik.errors.gender)}
                helperText={formik.touched.gender && formik.errors.gender}
                sx={{ marginBottom: 2, marginRight: "1%", width: "49%" }}
              >
                {["MALE", "FEMALE", "OTHER"].map((genderOption) => (
                  <MenuItem key={genderOption} value={genderOption}>
                    {genderOption}
                  </MenuItem>
                ))}
              </TextField>

              {/* <TextField
                size="small"
                id="category"
                name="category"
                select
                label="Role"
                value={formik.values.category}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                helperText={formik.touched.category && formik.errors.category}
                sx={{ marginBottom: 2, marginLeft: "1%", width: "49%" }}
              >
                {["User", "Coach"].map((userOption) => (
                  <MenuItem key={userOption} value={userOption}>
                    {userOption}
                  </MenuItem>
                ))}
              </TextField> */}

              {/* <DatePicker
                value={formik.values.dob}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                disableFuture
                views={["year", "month", "day"]}
                sx={{ marginBottom: 2, marginLeft: "1%", width: "49%" }}
              /> */}

              <TextField
                size="small"
                id="dob"
                type="date"
                name="dob"
                color="primary"
                autoComplete="off"
                value={formik.values.dob}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={
                  (formik.touched.dob && formik.errors.dob) ?? "Date of Birth"
                }
                sx={{ marginBottom: 2, marginLeft: "1%", width: "49%" }}
              />

              <Grid item xs>
                <FormControl
                  error={formik.touched.terms && Boolean(formik.errors.terms)}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="terms"
                        id="terms"
                        value={formik.values.terms}
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                      />
                    }
                    label={
                      <>
                        <span>I accept the </span>
                        <Link to={"/"}>terms of use</Link>
                        <span> and </span>
                        <Link to={"/"}>privacy policy</Link>
                      </>
                    }
                  />
                  <FormHelperText>
                    {formik.touched.terms && formik.errors.terms}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={formik.isSubmitting}
              >
                {isLoading ? "Registering..." : "Register"}
              </Button>
              <Grid container justifyContent="center">
                <Grid item sx={{ mt: 1.2 }}>
                  Already a user? <Link to="/login">Login</Link>
                </Grid>
              </Grid>
              {/* <Divider sx={{ mt: 2 }}>
                {" "}
                <Chip label="OR" />
              </Divider>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                <div id="buttonDiv"></div>
              </Box> */}
              {/* <Button
                type="submit"
                fullWidth
                color="secondary"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Google sx={{ mr: 1 }} />
                Sign Up with Google
              </Button> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={false}
          lg={6}
          sx={{
            backgroundImage: (t) =>
              t.palette.mode === "light"
                ? "url(./login.webp)"
                : "url(https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1600)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        />
      </Grid>
    </Box>
  );
};

export default Register;
