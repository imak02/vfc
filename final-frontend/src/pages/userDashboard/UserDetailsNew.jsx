import {
  CalendarMonth,
  Call,
  DirectionsRun,
  Egg,
  FitnessCenter,
  LocalDrink,
  LocalFireDepartment,
  Mail,
  Person,
  Place,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import MyLinearProgress from "../../components/MyLinearProgress";
import DietBarChart from "../../components/DietBarChart";
import LinearProgressCard from "../../components/LinearProgressCard";
import MyAccordion from "../../components/MyAccordion";
import DietList from "../../components/DietList";
import ExerciseList from "../../components/ExerciseList";

const dietsType = [
  { id: 1, title: "Breakfast" },
  { id: 2, title: "Brunch" },
  { id: 3, title: "Lunch" },
  { id: 4, title: "Supper" },
  { id: 5, title: "Dinner" },
];

const exercisesType = [
  { id: 1, title: "Biceps" },
  { id: 2, title: "Back" },
  { id: 3, title: "Legs" },
  { id: 4, title: "Chest" },
  { id: 5, title: "Cardio" },
];

const UserDetailsNew = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Avatar
              src="https://media.discordapp.net/attachments/1090466741995446405/1090469461284368484/IMG_2358.JPG?width=888&height=592"
              alt="Asbin Khanal"
              sx={{ width: 150, height: 150 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h6" component="h5">
                  Asbin Khanal
                </Typography>
                <Typography variant="body1" component="p">
                  @imak02
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "GrayText",
                  }}
                >
                  <Person fontSize="inherit" />
                  <Typography variant="body1" component="p">
                    Male -23 years
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "GrayText",
                  }}
                >
                  <Call fontSize="inherit" />
                  <Typography variant="body1" component="p">
                    9846636184
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "GrayText",
                  }}
                >
                  <Mail fontSize="inherit" />
                  <Typography variant="body1" component="p">
                    asbin@gmail.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "GrayText",
                  }}
                >
                  <Place fontSize="inherit" />
                  <Typography variant="body1" component="p">
                    Kathmandu, Nepal
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid container item xs={12} md={8} spacing={2}>
          <Grid item xs={6} md={3}>
            <Paper
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                182cm
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Height
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                77kg
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Weight
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                A+
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Blood Group
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper
              sx={{
                textAlign: "center",
                p: 2,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                Ectomorph
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Body Type
              </Typography>
            </Paper>
          </Grid>
          <Grid item container sx={{ my: 2 }} alignItems="flex-end">
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h5"
                  sx={{ fontWeight: "bold" }}
                  color="blueviolet"
                >
                  Goal:
                </Typography>
                <Typography
                  variant="h6"
                  component="h5"
                  sx={{ fontWeight: "bold" }}
                >
                  Weight Loss
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box sx={{ width: "100%" }}>
                <MyLinearProgress value={80} color="blueviolet" height={20} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <CalendarMonth />
        <Typography variant="h6" component="h4">
          {new Date().toDateString()}
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontWeight: "bold", color: "blueviolet", textAlign: "center" }}
        >
          User Diet
        </Typography>
      </Box>

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
            User Activity
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
        <MyAccordion
          title="User Diet"
          headers={dietsType}
          content={<DietList />}
        />
      </Box>

      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />
      <Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontWeight: "bold", color: "blueviolet", textAlign: "center" }}
        >
          User Exercises
        </Typography>
      </Box>
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
            User Activity
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
    </Paper>
  );
};

export default UserDetailsNew;
