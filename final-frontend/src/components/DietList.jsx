import { Box, Typography } from "@mui/material";
import React from "react";

const DietList = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="h6">Avocado and Scrambled Eggs</Typography>
        <Typography variant="body2" component="p" color="GrayText">
          Total Calories: 233 kcal
        </Typography>
      </Box>
      <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
        <Box
          component="img"
          sx={{ borderRadius: 3 }}
          height={100}
          width={200}
          alt="diet"
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Box>
    </Box>
  );
};

export default DietList;
