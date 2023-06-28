import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import DietCard from "../../components/DietCard";
import foods from "../../data/foods";
import DbCard from "../../components/DbCard";
import DietNutrientsCard from "../../components/DietNutrientsCard";
import MyCircularProgress from "../../components/MyCircularProgress";
import WaterIntakeCard from "../../components/WaterIntakeCard";
import { CalendarMonth } from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserDiet = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "blueviolet", mb: 2 }}
        >
          My Diet
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarMonth />
          <Typography variant="h6" component="h4">
            {new Date().toDateString()}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          gap: 2,
          justifyContent: "space-around",
        }}
      >
        <Link to="/user/13/diet-details">
          <DbCard
            title="Diet"
            subtitle="3214 calories"
            value={55}
            width={550}
            height={340}
            image="https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Link>
        <Box>
          <DietNutrientsCard />
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <WaterIntakeCard />
      </Box>
    </Box>
  );
};

export default UserDiet;
