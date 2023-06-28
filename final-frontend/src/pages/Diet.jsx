import React from "react";
import DietCard from "../components/DietCard";
import { Box, Paper } from "@mui/material";
import foods from "../data/foods";

const Diet = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {foods.map((food, index) => (
          <DietCard food={food} key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default Diet;
