import { Add, LocalDrink } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Fab,
  LinearProgress,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import MyLinearProgress from "./MyLinearProgress";

const water = [1, 2, 3, 4, 5, 6];

const WaterIntakeCard = () => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography
        variant="h5"
        component="h3"
        sx={{ fontWeight: "bold", color: "blueviolet", mb: 2 }}
      >
        Water Intake
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 2,
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", gap: { xs: 4, md: 10 }, flexWrap: "wrap" }}>
          {water.map((w) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
              key={w}
            >
              <Avatar sx={{ bgcolor: "skyblue", height: 72, width: 72, mb: 2 }}>
                <LocalDrink fontSize="large" />
              </Avatar>
              <Typography variant="h6" component="h6">
                600 mL
              </Typography>
              <Typography color="GrayText">9:03 AM</Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Fab color="info" aria-label="add" size="small">
            <Add />
          </Fab>
          <Typography sx={{ mt: 1 }} variant="h6">
            Add
          </Typography>
        </Box>
      </Box>
      <Box sx={{ p: 2, position: "relative" }}>
        <Box sx={{ display: "block" }}>
          <MyLinearProgress
            value={75}
            height={30}
            color="skyblue"
            showValue={true}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default WaterIntakeCard;
