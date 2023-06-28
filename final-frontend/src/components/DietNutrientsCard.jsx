import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
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

const DietNutrientsCard = () => {
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
        <MyCircularProgress value={75} mycolor="blueviolet" />

        <Grid container spacing={3} sx={{ ml: { xs: 1, md: 2 } }}>
          {nutrients.map((nutrient) => (
            <Grid item xs={4} sm={4} md={4} key={nutrient.id}>
              <Box>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === "light" ? "blueviolet" : "grey",
                  }}
                >
                  {nutrient.name}
                </Typography>
                <Typography variant="h6" component="h6">
                  {nutrient.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
            3000g
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "blueviolet" : "grey",
            }}
          >
            Today's goal
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
            3000g
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "blueviolet" : "grey",
            }}
          >
            Healthy Calorie
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" component="h6" sx={{ fontWeight: "bold" }}>
            3000g
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light" ? "blueviolet" : "grey",
            }}
          >
            Unhealthy Calorie
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default DietNutrientsCard;
