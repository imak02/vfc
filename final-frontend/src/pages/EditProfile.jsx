import React, { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  Fab,
  IconButton,
  Input,
  InputAdornment,
  MenuItem,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Add,
  ArrowDropDown,
  ArrowRight,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import countries from "../data/countries";

const nameRegex = /^[a-zA-Z-' ]+$/;
const userNameRegex = /^[a-z0-9_-]{3,15}$/;
const phoneRegex = /^(\+977)?[0-9]{9,10}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegex, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*First name is required"),
  last_name: Yup.string()
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
  dob: Yup.date().max(new Date(), "You can't be born in the future!"),
  country: Yup.string().oneOf[countries.label],
  address: Yup.string(),
});

const passwordValidationSchema = Yup.object({
  old_password: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  new_password: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  confirm_password: Yup.string()
    .required("*Password required")
    .oneOf([Yup.ref("new_password"), null], "Both passwords do not match."),
});

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [changePassword, setChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      image: "",
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      phone: "",
      dob: "",
      country: "",
      address: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // const formData = new FormData();
      // formData.set("image", values.image);
      // formData.set("first_name", values.first_name);
      // formData.set("last_name", values.last_name);
      // formData.set("username", values.username);
      // formData.set("email", values.email);
      // formData.set("phone", values.phone);
      // formData.set("dob", values.dob);
      // formData.set("country", values.country);
      // formData.set("address", values.address);

      // mutate(formData, {
      //   onSuccess: () => {
      //     resetForm();
      //   },
      // });
    },
  });

  const formik2 = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: passwordValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // let sendData = Object.assign({}, values);
      // delete sendData.confirm_password;
      // mutate(sendData, {
      //   onSuccess: () => {
      //     resetForm();
      //   },
      // });
    },
  });

  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        variant="h5"
        component="h1"
        color="blueviolet"
        sx={{ fontWeight: "bold" }}
      >
        Edit Profile
      </Typography>
      <Typography variant="body1" color="GrayText" sx={{ my: 1 }}>
        Edit the details below as per your requirement.
      </Typography>
      <Divider />

      <Box component="form" onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            mt: 1,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", lg: "row" },
            p: 1,
            gap: { lg: 5 },
          }}
        >
          <Box sx={{ flex: 2 }}>
            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", md: "49%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                First Name
              </Typography>
              <TextField
                id="first_name"
                name="first_name"
                type="text"
                placeholder="Enter your first name"
                fullWidth
                value={formik.values.first_name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.first_name && Boolean(formik.errors.first_name)
                }
                helperText={
                  formik.touched.first_name && formik.errors.first_name
                }
              />
            </Box>
            <Box
              sx={{
                marginBottom: 2,
                marginLeft: { md: "1%" },
                width: { xs: "100%", md: "49%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Last Name
              </Typography>
              <TextField
                color="primary"
                id="last_name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
                fullWidth
                value={formik.values.last_name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.last_name && Boolean(formik.errors.last_name)
                }
                helperText={formik.touched.last_name && formik.errors.last_name}
              />
            </Box>
            <Box
              sx={{
                marginBottom: 2,
              }}
            >
              <Typography variant="h6" component="h2">
                Email
              </Typography>
              <TextField
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                fullWidth
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", md: "29%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Date of Birth
              </Typography>
              <TextField
                color="primary"
                id="dob"
                name="dob"
                type="date"
                placeholder="DD/MM/YYYY"
                fullWidth
                value={formik.values.dob}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginLeft: { md: "1%" },
                width: { xs: "100%", md: "69%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Phone
              </Typography>
              <TextField
                color="primary"
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                fullWidth
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", md: "29%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Country
              </Typography>
              {/* <TextField
                color="primary"
                id="country"
                name="country"
                type="text"
                placeholder="Enter your country"
                fullWidth
                value={formik.values.country}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              /> */}

              <Autocomplete
                id="country"
                name="country"
                fullWidth
                autoHighlight
                options={countries}
                onBlur={formik.handleBlur}
                onChange={(event, value) => {
                  formik.setFieldValue("country", value.label);
                }}
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                      alt=""
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select your country"
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginLeft: { md: "1%" },
                width: { xs: "100%", md: "69%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Address
              </Typography>
              <TextField
                color="primary"
                id="address"
                name="address"
                type="text"
                placeholder="Enter your address"
                fullWidth
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                marginBottom: 2,
              }}
            >
              <Typography variant="h6" component="h2">
                Profile Picture
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Badge overlap="circular">
                  <Avatar
                    alt="Profile"
                    src={profilePic || "/profile.jpeg"}
                    sx={{
                      width: 215,
                      height: 215,
                      my: 3,
                    }}
                  />
                  <Fab
                    component="label"
                    variant="string"
                    size="large"
                    color="success"
                    aria-label="upload picture"
                  >
                    <Add />

                    <Input
                      fullWidth
                      id="image"
                      name="image"
                      type="file"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "image",
                          event.currentTarget.files[0]
                        );
                        setProfilePic(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                      error={
                        formik.touched.image && Boolean(formik.errors.image)
                      }
                      sx={{ mb: 2, display: "none" }}
                    />
                  </Fab>
                </Badge>
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: 2,
              }}
            >
              <Typography variant="h6" component="h2">
                Username
              </Typography>
              <TextField
                color="primary"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                fullWidth
                value={formik.values.username}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", gap: 3, justifyContent: "flex-end", my: 2 }}
        >
          <Button variant="contained" color="error" type="reset">
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            color: "blueviolet",
          }}
          onClick={() => setChangePassword((prev) => !prev)}
        >
          {changePassword ? (
            <ArrowDropDown color="inherit" sx={{ fontSize: 40 }} />
          ) : (
            <ArrowRight color="inherit" sx={{ fontSize: 40 }} />
          )}
          <Typography
            variant="h6"
            component="h4"
            color="blueviolet"
            sx={{ fontWeight: "bold", py: 2 }}
          >
            Change Password
          </Typography>
        </Box>
        <Collapse in={changePassword}>
          <Box component="form" onSubmit={formik2.handleSubmit}>
            <Box>
              <Box
                sx={{
                  marginBottom: 2,
                  marginRight: { md: "1%" },
                  width: { xs: "100%", md: "70%", xl: "40%" },
                }}
              >
                <Typography variant="h6" component="h2">
                  Old Password
                </Typography>

                <TextField
                  fullWidth
                  id="old_password"
                  name="old_password"
                  color="primary"
                  placeholder="Enter your old password"
                  type={showPassword ? "text" : "password"}
                  value={formik2.values.old_password}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.old_password &&
                    Boolean(formik2.errors.old_password)
                  }
                  helperText={
                    formik2.touched.old_password && formik2.errors.old_password
                  }
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
              </Box>

              <Box
                sx={{
                  marginBottom: 2,
                  marginRight: { md: "1%" },
                  width: { xs: "100%", md: "70%", xl: "40%" },
                }}
              >
                <Typography variant="h6" component="h2">
                  New Password
                </Typography>

                <TextField
                  fullWidth
                  id="new_password"
                  name="new_password"
                  color="primary"
                  placeholder="Enter your new password"
                  type={showPassword ? "text" : "password"}
                  value={formik2.values.new_password}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.new_password &&
                    Boolean(formik2.errors.new_password)
                  }
                  helperText={
                    formik2.touched.new_password && formik2.errors.new_password
                  }
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
              </Box>

              <Box
                sx={{
                  marginBottom: 2,
                  marginRight: { md: "1%" },
                  width: { xs: "100%", md: "70%", xl: "40%" },
                }}
              >
                <Typography variant="h6" component="h2">
                  Confirm Password
                </Typography>

                <TextField
                  fullWidth
                  id="confirm_password"
                  name="confirm_password"
                  color="primary"
                  placeholder="Confirm your new password"
                  type={showPassword ? "text" : "password"}
                  value={formik2.values.confirm_password}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.confirm_password &&
                    Boolean(formik2.errors.confirm_password)
                  }
                  helperText={
                    formik2.touched.confirm_password &&
                    formik2.errors.confirm_password
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword3}
                          onMouseDown={handleMouseDownPassword3}
                          edge="end"
                        >
                          {showPassword3 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "70%", xl: "40%" },
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 3,
                my: 4,
              }}
            >
              <Button variant="contained" type="reset" color="error">
                Cancel
              </Button>
              <Button variant="contained" type="submit" color="info">
                Change Password
              </Button>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Paper>
  );
};

export default EditProfile;
