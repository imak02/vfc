import React from "react";
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import MyCircularProgress from "./MyCircularProgress";

const nutrients = [
  { id: 1, value: "2007g", name: "Carbohydrate" },
  { id: 2, value: "200g", name: "Protein" },
  { id: 3, value: "200g", name: "Potassium" },
  { id: 4, value: "200g", name: "Vitamin" },
  { id: 5, value: "200g", name: "Fiber" },
  { id: 6, value: "200g", name: "Fat" },
  { id: 7, value: "200g", name: "Calcium" },
  { id: 8, value: "200g", name: "Saturated Fat" },
  { id: 9, value: "200g", name: "Sugar" },
];

const ExerciseProgressCard = () => {
  return (
    <Paper sx={{ p: 2 }} elevation={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyCircularProgress value={75} mycolor="orange" />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
              <Box component="span" color="orange">
                5.1
              </Box>
              /8 km
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "blueviolet" : "grey",
              }}
            >
              Running
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyCircularProgress value={25} mycolor="skyblue" />

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
              <Box component="span" color="skyblue">
                2
              </Box>
              /8 hrs
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "blueviolet" : "grey",
              }}
            >
              Sleeping
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1.2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MyCircularProgress value={50} mycolor="blueviolet" />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
              <Box component="span" color="blueviolet">
                1500
              </Box>
              /3000 Kcal
            </Typography>

            <Typography
              variant="body1"
              component="p"
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "blueviolet" : "grey",
              }}
            >
              Calories burnt
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
      </Box>
    </Paper>
  );
};

export default ExerciseProgressCard;
