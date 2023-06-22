import React from "react";
import LinearProgressCard from "../../components/LinearProgressCard";
import { Box, Paper, Typography } from "@mui/material";
import { Egg, LocalDrink, LocalFireDepartment } from "@mui/icons-material";
import DietBarChart from "../../components/DietBarChart";
import SearchBar from "../../components/SearchBar";
import PeopleCard from "../../components/PeopleCard";
import DietAccordion from "../../components/DietAccordion";
import DbBannerCard from "../../components/DbBannerCard";

const UserDietDetails = () => {
  return (
    <Box>
      <DbBannerCard title="Diet" subtitle="3214 calories" value={80} />
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
            name="Water Intake"
            progress="5.1"
            target="8"
            unit="ltr"
            icon={<LocalDrink fontSize="large" />}
            color="skyblue"
          />
          <LinearProgressCard
            name="Calorie Intake"
            progress="1000"
            target="5000"
            unit="kcal"
            icon={<LocalFireDepartment fontSize="large" />}
            color="orange"
          />
          <LinearProgressCard
            name="Protein Intake"
            progress="50"
            target="80"
            unit="gm"
            icon={<Egg fontSize="large" />}
            color="blueviolet"
          />
        </Box>
      </Box>
      <Box sx={{ my: 5 }}>
        <DietAccordion />
      </Box>
      <Paper sx={{ p: 2, my: 5 }} elevation={2}>
        <SearchBar title="Popular Nutritionists" />
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
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserDietDetails;
