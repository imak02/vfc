import React, { useEffect, useState } from "react";
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
import countries from "../../data/countries";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../../redux/slices/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { logout } from "../../redux/slices/authSlice";

const nameRegex = /^[a-zA-Z-' ]+$/;
const userNameRegex = /^[a-z0-9_-]{3,15}$/;
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
  dob: Yup.date().max(new Date(), "You can't be born in the future!"),
  country: Yup.string().oneOf[countries.label],
  address: Yup.string(),
});

const passwordValidationSchema = Yup.object({
  oldPassword: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  newPassword: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegex,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  confirmPassword: Yup.string()
    .required("*Password required")
    .oneOf([Yup.ref("newPassword"), null], "Both passwords do not match."),
});

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [changePassword, setChangePassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);

  const queryClient = useQueryClient();

  const user = useSelector((state) => state.auth.user ?? "");

  const profilePictureLink = `${axios.defaults.baseURL}${user?.profilePicture}`;
  useEffect(() => {
    setProfilePic(profilePictureLink);
  }, [user]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id;

  const handleClickOldPassword = () => setShowOldPassword((show) => !show);
  const handleMouseDownOldPassword = (event) => {
    event.preventDefault();
  };

  const handleClickNewPassword = () => setShowNewPassword((show) => !show);
  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowconfirmPassword = () =>
    setShowconfirmPassword((show) => !show);
  const handleMouseDownconfirmPassword = (event) => {
    event.preventDefault();
  };

  const { mutate, isLoading } = useMutation(
    (values) => axios.put(`user/change-password`, values),
    {
      onMutate: () => {
        dispatch(loadingToast("Changing password..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          dispatch(successToast(data?.data?.message));
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

  const { mutate: profileMutate } = useMutation(
    (values) => axios.put(`user/update-profile/${userId}/`, values),
    {
      onMutate: () => {
        dispatch(loadingToast("Updating profile..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          dispatch(successToast(data?.data?.message));
          queryClient.invalidateQueries({ queryKey: ["currentUser"] });
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
      firstName: user?.firstName ?? "",
      lastName: user?.lastName ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      username: user?.username ?? "",
      country: user?.country ?? "",
      address: user?.address ?? "",
      profilePicture: "",
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: async (values, { resetForm }) => {
      console.log("Submitting");
      const formData = new FormData();
      formData.set("profilePicture", values.profilePicture);
      formData.set("firstName", values.firstName);
      formData.set("lastName", values.lastName);
      formData.set("email", values.email);
      formData.set("phone", values.phone);
      formData.set("username", values.username);
      formData.set("country", values.country);
      formData.set("address", values.address);

      profileMutate(formData, {
        onSuccess: () => {
          resetForm();
          navigate(`/user/${userId}/profile`);
        },
      });
    },
  });

  const formik2 = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: passwordValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      let data = Object.assign({}, values);
      delete data.confirmPassword;

      mutate(data, {
        onSuccess: () => {
          resetForm();
          dispatch(logout());
        },
      });
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
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                fullWidth
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                fullWidth
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                Username
              </Typography>
              <TextField
                id="username"
                name="username"
                type="text"
                placeholder="Enter your Username"
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
                    src={profilePic}
                    sx={{
                      width: 215,
                      height: 215,
                      my: 3,
                      bgcolor: "blueviolet",
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
                      id="profilePicture"
                      name="profilePicture"
                      type="file"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "profilePicture",
                          event.currentTarget.files[0]
                        );
                        setProfilePic(
                          URL.createObjectURL(event.target.files[0])
                        );
                      }}
                      error={
                        formik.touched.profilePicture &&
                        Boolean(formik.errors.profilePicture)
                      }
                      sx={{ mb: 2, display: "none" }}
                    />
                  </Fab>
                </Badge>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            mr: 4,
            justifyContent: "flex-end",
            my: 2,
          }}
        >
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
                  id="oldPassword"
                  name="oldPassword"
                  color="primary"
                  placeholder="Enter your old password"
                  type={showOldPassword ? "text" : "password"}
                  value={formik2.values.oldPassword}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.oldPassword &&
                    Boolean(formik2.errors.oldPassword)
                  }
                  helperText={
                    formik2.touched.oldPassword && formik2.errors.oldPassword
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickOldPassword}
                          onMouseDown={handleMouseDownOldPassword}
                          edge="end"
                        >
                          {showOldPassword ? <VisibilityOff /> : <Visibility />}
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
                  id="newPassword"
                  name="newPassword"
                  color="primary"
                  placeholder="Enter your new password"
                  type={showNewPassword ? "text" : "password"}
                  value={formik2.values.newPassword}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.newPassword &&
                    Boolean(formik2.errors.newPassword)
                  }
                  helperText={
                    formik2.touched.newPassword && formik2.errors.newPassword
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickNewPassword}
                          onMouseDown={handleMouseDownNewPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
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
                  id="confirmPassword"
                  name="confirmPassword"
                  color="primary"
                  placeholder="Confirm your new password"
                  type={showconfirmPassword ? "text" : "password"}
                  value={formik2.values.confirmPassword}
                  onBlur={formik2.handleBlur}
                  onChange={formik2.handleChange}
                  error={
                    formik2.touched.confirmPassword &&
                    Boolean(formik2.errors.confirmPassword)
                  }
                  helperText={
                    formik2.touched.confirmPassword &&
                    formik2.errors.confirmPassword
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowconfirmPassword}
                          onMouseDown={handleMouseDownconfirmPassword}
                          edge="end"
                        >
                          {showconfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
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
