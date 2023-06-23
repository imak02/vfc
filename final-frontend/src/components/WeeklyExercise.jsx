import React, { useState } from "react";
import { Box, Paper, Tab, Tabs, Typography } from "@mui/material";
import LinearProgressCard from "./LinearProgressCard";
import {
  AirlineSeatLegroomNormal,
  AirlineSeatReclineExtra,
  AirlineSeatReclineNormal,
  DirectionsRun,
  EmojiPeople,
  FitnessCenter,
  LocalFireDepartment,
} from "@mui/icons-material";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklyExercise = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper sx={{ p: 2 }}>
      <Box>
        <Typography
          variant="h5"
          component="h3"
          fontWeight="bold"
          color="blueviolet"
        >
          Weekly Schedule
        </Typography>

        <Box sx={{ my: 2 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="weekly exercise"
            scrollButtons="auto"
            variant="scrollable"
            textColor="inherit"
            indicatorColor="secondary"
          >
            {weekdays.map((day, index) => (
              <Tab key={index} label={day} />
            ))}
          </Tabs>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LinearProgressCard
            name="Biceps"
            progress="2"
            target="3"
            icon={<EmojiPeople fontSize="large" />}
            color="orange"
          />
          <LinearProgressCard
            name="Back"
            progress="2"
            target="3"
            icon={<AirlineSeatReclineNormal fontSize="large" />}
            color="black"
          />
          <LinearProgressCard
            name="Legs"
            progress="2"
            target="3"
            icon={<AirlineSeatLegroomNormal fontSize="large" />}
            color="blueviolet"
          />
          <LinearProgressCard
            name="Chest"
            progress="2"
            target="3"
            icon={<AirlineSeatReclineExtra fontSize="large" />}
            color="green"
          />
          <LinearProgressCard
            name="Cardio"
            progress="2"
            target="3"
            icon={<DirectionsRun fontSize="large" />}
            color="red"
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default WeeklyExercise;
