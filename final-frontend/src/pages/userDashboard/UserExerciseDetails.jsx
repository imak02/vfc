import React from "react";
import LinearProgressCard from "../../components/LinearProgressCard";
import { Box, Paper, Typography } from "@mui/material";
import {
  DirectionsRun,
  FitnessCenter,
  LocalFireDepartment,
} from "@mui/icons-material";
import DietBarChart from "../../components/DietBarChart";
import SearchBar from "../../components/SearchBar";
import PeopleCard from "../../components/PeopleCard";
import DbBannerCard from "../../components/DbBannerCard";
import MyAccordion from "../../components/MyAccordion";
import ExerciseList from "../../components/ExerciseList";

const exercisesType = [
  { id: 1, title: "Biceps" },
  { id: 2, title: "Back" },
  { id: 3, title: "Legs" },
  { id: 4, title: "Chest" },
  { id: 5, title: "Cardio" },
];

const UserExerciseDetails = () => {
  return (
    <Box>
      <DbBannerCard title="Exercise" subtitle="1 hr 12 minutes" value={80} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          minHeight: 400,
          my: 5,
        }}
      >
        <Paper sx={{ flex: 3, p: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            Your Activity
          </Typography>
          <Box width="100%" height={350} sx={{ py: 2 }}>
            <DietBarChart />
          </Box>
        </Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LinearProgressCard
            name="Running"
            progress="5.1"
            target="8"
            unit="km"
            icon={<DirectionsRun fontSize="large" />}
            color="skyblue"
          />
          <LinearProgressCard
            name="Calorie Burnt"
            progress="1000"
            target="5000"
            unit="kcal"
            icon={<LocalFireDepartment fontSize="large" />}
            color="orange"
          />
          <LinearProgressCard
            name="Exercise"
            progress="5"
            target="8"
            unit="hrs"
            icon={<FitnessCenter fontSize="large" />}
            color="blueviolet"
          />
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <MyAccordion
          title="My Workout"
          headers={exercisesType}
          content={<ExerciseList />}
        />
      </Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <SearchBar title="Popular Trainers" />
        <Box
          sx={{
            my: 5,
            gap: 2,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <PeopleCard
            name="Rohil Maharjan"
            role="Cardio Specialist"
            image="https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <PeopleCard
            name="Rohil Maharjan"
            role="Cardio Specialist"
            image="https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <PeopleCard
            name="Rohil Maharjan"
            role="Cardio Specialist"
            image="https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <PeopleCard
            name="Rohil Maharjan"
            role="Cardio Specialist"
            image="https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserExerciseDetails;
