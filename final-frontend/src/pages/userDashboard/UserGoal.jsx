import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../../redux/slices/toastSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import MyAccordion from "../../components/MyAccordion";
import DietList from "../../components/DietList";
import dietRecommendation from "../../data/dietRecommendation";
import DietAccordion from "../../components/DietAccordion";

const dietsType = [
  { id: 1, title: "Breakfast" },
  { id: 2, title: "Brunch" },
  { id: 3, title: "Lunch" },
  { id: 4, title: "Supper" },
  { id: 5, title: "Dinner" },
];

const UserGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/diet/recommend/", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Posting..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);
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

  const formik = useFormik({
    initialValues: {
      height: "",
      weight: "",
      activity: "",
      weightplan: "",
    },

    onSubmit: async (values, { resetForm }) => {
      // console.log(values);
      mutate(values, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  return (
    <Box>
      <Paper>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 2 }}>
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
              Activity
            </Typography>
            <TextField
              id="activity"
              name="activity"
              select
              fullWidth
              value={formik.values.activity}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.activity && Boolean(formik.errors.activity)}
              helperText={formik.touched.activity && formik.errors.activity}
              SelectProps={{
                displayEmpty: true,
                renderValue: (value) => (value ? value : "Select a Activity"),
              }}
            >
              {[
                "Little/no exercise",
                "Light exercise",
                "Moderate exercise (3-5 days/wk)",
                "Very active (6-7 days/wk)",
              ].map((categoryOption) => (
                <MenuItem key={categoryOption} value={categoryOption}>
                  {categoryOption}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box
            sx={{
              marginBottom: 2,
              width: { xs: "100%", lg: "25%" },
              display: "inline-block",
            }}
          >
            <Typography variant="h6" component="h2">
              Weight Plan
            </Typography>
            <TextField
              id="weightplan"
              name="weightplan"
              select
              fullWidth
              value={formik.values.weightplan}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={
                formik.touched.weightplan && Boolean(formik.errors.weightplan)
              }
              helperText={formik.touched.weightplan && formik.errors.weightplan}
              // SelectProps={{
              //   displayEmpty: true,
              //   renderValue: (value) =>
              //     value ? value : "Select a Weight Plan",
              // }}
            >
              {[
                { name: "Maintain weight", value: "1.0" },
                { name: "Mild weight loss", value: "0.9" },
                { name: "Weight Loss", value: "0.8" },
                { name: "Extreme weight Loss", value: "0.6" },
              ].map((categoryOption) => (
                <MenuItem
                  key={categoryOption.name}
                  value={categoryOption.value}
                >
                  {categoryOption.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Button type="submit" variant="contained" color="info">
              {isLoading ? "Loading..." : "Submit"}
            </Button>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ p: 2, my: 5 }}>
        <Box sx={{ my: 5 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} lg={6} xl={4}>
              <DietAccordion
                title="Breakfast"
                dietData={dietRecommendation?.breakfast}
              />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <DietAccordion
                title="Lunch"
                dietData={dietRecommendation?.lunch}
              />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
              <DietAccordion
                title="Dinner"
                dietData={dietRecommendation?.dinner}
              />
            </Grid>
          </Grid>

          {/* <MyAccordion
            title="My Diet"
            headers={dietsType}
            dietData={dietRecommendation}
          /> */}
        </Box>
      </Paper>
    </Box>
  );
};

export default UserGoal;
