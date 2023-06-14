import {
  Box,
  Button,
  Divider,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../../redux/slices/toastSlice";

const EditBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Posting..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);
          dispatch(successToast(data?.data?.message));
          navigate("/blog");
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
      height: "",
      weight: "",
      blood_pressure: "",
      blood_group: "",
      blood_sugar: "",
      body_type: "",
      food_preference: "",
      diseases: "",
      allergies: "",
      injuries: "",
      abnormalities: "",
    },

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      // mutate(values, {
      //   onSuccess: () => {
      //     resetForm();
      //   },
      // });
    },
  });
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "blueviolet" }}
        >
          Edit Body Details
        </Typography>
        <Typography variant="body1" color="GrayText" sx={{ my: 1 }}>
          Edit the details below as per your requirement.
        </Typography>
        <Divider />

        <Box component="form" onSubmit={formik.handleSubmit}>
          <Box sx={{ my: 2 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "bold", color: "blueviolet", my: 1 }}
            >
              General Information
            </Typography>
            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Height
              </Typography>
              <TextField
                color="primary"
                id="height"
                name="height"
                type="number"
                placeholder="Enter your height in inches"
                fullWidth
                value={formik.values.height}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.height && Boolean(formik.errors.height)}
                helperText={formik.touched.height && formik.errors.height}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Weight
              </Typography>
              <TextField
                color="primary"
                id="weight"
                name="weight"
                type="number"
                placeholder="Enter your weight in kilograms"
                fullWidth
                value={formik.values.weight}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                helperText={formik.touched.weight && formik.errors.weight}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Blood Pressure
              </Typography>
              <TextField
                color="primary"
                id="blood_pressure"
                name="blood_pressure"
                type="text"
                placeholder="Enter your blood_pressure in mmHg"
                fullWidth
                value={formik.values.blood_pressure}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.blood_pressure &&
                  Boolean(formik.errors.blood_pressure)
                }
                helperText={
                  formik.touched.blood_pressure && formik.errors.blood_pressure
                }
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                width: { xs: "100%", lg: "25%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Blood Group
              </Typography>
              <TextField
                id="blood_group"
                name="blood_group"
                select
                fullWidth
                value={formik.values.blood_group}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.blood_group &&
                  Boolean(formik.errors.blood_group)
                }
                helperText={
                  formik.touched.blood_group && formik.errors.blood_group
                }
                SelectProps={{
                  displayEmpty: true,
                  renderValue: (value) =>
                    value ? value : "Select your blood group",
                }}
              >
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                  (bloodGroupType) => (
                    <MenuItem key={bloodGroupType} value={bloodGroupType}>
                      {bloodGroupType}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Blood Sugar
              </Typography>
              <TextField
                color="primary"
                id="blood_sugar"
                name="blood_sugar"
                type="text"
                placeholder="Enter your blood_sugar in mmHg"
                fullWidth
                value={formik.values.blood_sugar}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.blood_sugar &&
                  Boolean(formik.errors.blood_sugar)
                }
                helperText={
                  formik.touched.blood_sugar && formik.errors.blood_sugar
                }
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Body Type
              </Typography>
              <TextField
                id="body_type"
                name="body_type"
                select
                fullWidth
                value={formik.values.body_type}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.body_type && Boolean(formik.errors.body_type)
                }
                helperText={formik.touched.body_type && formik.errors.body_type}
                SelectProps={{
                  displayEmpty: true,
                  renderValue: (value) =>
                    value ? value : "Select your body type",
                }}
              >
                {["Ectomorph", "Endomorph", "Mesomorph"].map((bodyType) => (
                  <MenuItem key={bodyType} value={bodyType}>
                    {bodyType}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", lg: "24%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Food Preference
              </Typography>
              <TextField
                id="food_preference"
                name="food_preference"
                select
                fullWidth
                value={formik.values.food_preference}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.food_preference &&
                  Boolean(formik.errors.food_preference)
                }
                helperText={
                  formik.touched.food_preference &&
                  formik.errors.food_preference
                }
                SelectProps={{
                  displayEmpty: true,
                  renderValue: (value) =>
                    value ? value : "Select your food preference",
                }}
              >
                {["Vegetarian", "Non-Vegetarian", "Vegan"].map((bodyType) => (
                  <MenuItem key={bodyType} value={bodyType}>
                    {bodyType}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Divider />
          </Box>

          <Box>
            <Typography
              variant="h5"
              component="h2"
              sx={{ fontWeight: "bold", color: "blueviolet", my: 1 }}
            >
              Additional Information
            </Typography>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", md: "49%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Diseases
              </Typography>
              <TextField
                color="primary"
                id="diseases"
                name="diseases"
                type="text"
                multiline
                rows={4}
                placeholder="Enter the list of diseases you have suffered"
                fullWidth
                value={formik.values.diseases}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.diseases && Boolean(formik.errors.diseases)
                }
                helperText={formik.touched.diseases && formik.errors.diseases}
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
                Allergies
              </Typography>
              <TextField
                color="primary"
                id="allergies"
                name="allergies"
                type="text"
                multiline
                rows={4}
                placeholder="Enter the list of allergies you have"
                fullWidth
                value={formik.values.allergies}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.allergies && Boolean(formik.errors.allergies)
                }
                helperText={formik.touched.allergies && formik.errors.allergies}
              />
            </Box>

            <Box
              sx={{
                marginBottom: 2,
                marginRight: { md: "1%" },
                width: { xs: "100%", md: "49%" },
                display: "inline-block",
              }}
            >
              <Typography variant="h6" component="h2">
                Injuries
              </Typography>
              <TextField
                color="primary"
                id="injuries"
                name="injuries"
                type="text"
                multiline
                rows={4}
                placeholder="Enter the list of injuries you have suffered"
                fullWidth
                value={formik.values.injuries}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.injuries && Boolean(formik.errors.injuries)
                }
                helperText={formik.touched.injuries && formik.errors.injuries}
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
                Body Abnormalities
              </Typography>
              <TextField
                color="primary"
                id="abnormalities"
                name="abnormalities"
                type="text"
                multiline
                rows={4}
                placeholder="Enter the list of abnormalities you have"
                fullWidth
                value={formik.values.abnormalities}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={
                  formik.touched.abnormalities &&
                  Boolean(formik.errors.abnormalities)
                }
                helperText={
                  formik.touched.abnormalities && formik.errors.abnormalities
                }
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "flex-end",
              mt: 2,
            }}
          >
            <Button
              type="reset"
              color="error"
              variant="contained"
              onClick={() => {
                formik.resetForm();
                setImage(null);
              }}
            >
              Clear
            </Button>

            <Button
              type="submit"
              color="success"
              variant="contained"
              disabled={isLoading}
            >
              Submit
              {isLoading ? "Posting..." : "Post"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default EditBody;
