import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  Badge,
  Chip,
  Divider,
  FormControl,
  FormHelperText,
  LinearProgress,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import {
  AddCircle,
  Google,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../redux/slices/toastSlice";
import { useMutation, useQuery } from "@tanstack/react-query";

const nameRegex = /^[a-zA-Z-' ]+$/;
const userNameRegex = /^[a-z0-9_-]{3,15}$/;
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const phoneRegex = /^(\+977)?[0-9]{9,10}$/;

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
  userName: Yup.string()
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

  gender: Yup.string().required("Select your gender"),
  userRole: Yup.string().required("Select your role"),
});

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userId = useParams();
  const [userData, setUserData] = useState("");

  console.log(userData.firstName);
  useEffect(() => {
    const getUserData = async () => {
      const userData = await axios.get(`users/${userId.id}`);
      setUserData(userData?.data?.data);
      setName;
    };
    getUserData();
  }, []);

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/users/:userId", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Registering user..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
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
      firstName: userData.firstName,
      lastName: "",
      userName: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

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

  return (
    <Box
      sx={{
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.secondary.main
            : t.palette.grey[800],
        pt: 4,
        pb: 5,
        minHeight: "100vh",
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
            <Badge
              overlap="circular"
              sx={{ "&:hover": { cursor: "pointer" } }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={<AddCircle />}
            >
              <Avatar
                sx={{ width: 150, height: 150 }}
                alt="John Doe"
                src="/profile.jpeg"
              />
            </Badge>

            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                size="small"
                id="firstName"
                name="firstName"
                color="focusInput"
                autoComplete="off"
                label="First Name"
                value={formik.values.firstName}
                placeholder={formik.values.firstName}
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
                color="focusInput"
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
                id="userName"
                name="userName"
                color="focusInput"
                autoComplete="off"
                label="Username"
                value={formik.values.userName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                sx={{ marginBottom: 2 }}
              />

              <TextField
                fullWidth
                size="small"
                id="email"
                type="email"
                name="email"
                color="focusInput"
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
                color="focusInput"
                autoComplete="off"
                label="Phone Number"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                sx={{ marginBottom: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Update"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfile;
