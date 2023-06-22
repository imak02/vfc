import { LocalDrink } from "@mui/icons-material";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import MyLinearProgress from "./MyLinearProgress";

const LinearProgressCard = ({ name, progress, target, unit, icon, color }) => {
  return (
    <Paper sx={{ width: 350, p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 1,
        }}
      >
        <Avatar sx={{ bgcolor: color, height: 56, width: 56 }}>{icon}</Avatar>
        <Box>
          <Typography variant="h6" color="GrayText">
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography variant="h6" color={color} fontWeight="bold">
              {progress}
            </Typography>
            <Typography variant="body1">/{target}</Typography>
            <Typography variant="body1">{unit}</Typography>
          </Box>
        </Box>
      </Box>
      <MyLinearProgress
        value={(progress / target) * 100}
        height={10}
        color={color}
      />
    </Paper>
  );
};

export default LinearProgressCard;
