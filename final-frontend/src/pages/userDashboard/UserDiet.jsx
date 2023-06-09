import React from "react";
import { Box, Paper } from "@mui/material";
import DietCard from "../../components/DietCard";
import foods from "../../data/foods";

const UserDiet = () => {
  return (
    <Box sx={{ p: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
      {foods.map((food, index) => (
        <DietCard food={food} key={index} />
      ))}
    </Box>
  );
};

export default UserDiet;
