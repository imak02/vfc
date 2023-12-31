import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import DietCard from "../../components/DietCard";
import foods from "../../data/foods";
import DbCard from "../../components/DbCard";
import MyCircularProgress from "../../components/MyCircularProgress";
import WaterIntakeCard from "../../components/WaterIntakeCard";
import { CalendarMonth } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ExerciseProgressCard from "../../components/ExerciseProgressCard";
import WeeklyExercise from "../../components/WeeklyExercise";

const UserExercises = () => {
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
          My Exercise
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
          justifyContent: "space-between",
        }}
      >
        <Link to="/user/123/exercise-details">
          <DbCard
            title="Exercise"
            subtitle="2 hr 12 minutes"
            value={55}
            width={550}
            height={260}
            image="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Link>
        <Box sx={{ flexGrow: 1 }}>
          <ExerciseProgressCard />
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <WeeklyExercise />
      </Box>
    </Box>
  );
};

export default UserExercises;
