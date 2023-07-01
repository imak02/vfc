import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import Webcam from "react-webcam";
import ExerciseBox from "../../components/ExerciseBox";
import {
  Check,
  Pending,
  PlayArrow,
  PlayCircle,
  Stop,
  StopCircle,
} from "@mui/icons-material";

const videoConstraints = {
  //   width: "100%",
  height: 500,
  facingMode: "user",
};

const ExerciseVideo = () => {
  const [openCamera, setOpenCamera] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Paper
          elevation={2}
          sx={{
            flex: 2,
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              2
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Set
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              00
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Count
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h4" fontWeight="bold" color="blueviolet">
              00:00:00
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Duration
            </Typography>
          </Box>
        </Paper>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            onClick={() => {
              setOpenCamera(true);
            }}
          >
            <Avatar
              sx={{
                bgcolor: "green",
                height: 72,
                width: 72,
                mb: 2,
                cursor: "pointer",
              }}
            >
              <PlayArrow fontSize="large" />
            </Avatar>
            <Typography variant="h4" component="h3" fontWeight="bold">
              Start
            </Typography>
          </Box>
          <Box
            onClick={() => {
              setOpenCamera(false);
            }}
          >
            <Avatar
              sx={{
                bgcolor: "red",
                height: 72,
                width: 72,
                mb: 2,
                cursor: "pointer",
              }}
            >
              <Stop fontSize="large" />
            </Avatar>
            <Typography variant="h4" component="h3" fontWeight="bold">
              Stop
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ flex: 2 }}>
          {!openCamera && (
            <Box
              width="100%"
              height={500}
              component="img"
              alt="exercise"
              src="https://indatalabs.com/wp-content/uploads/2020/10/human-activity-recognition-fitness-app.jpg"
            />
          )}
          {openCamera && (
            <Webcam
              audio={false}
              width="100%"
              height={500}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          )}
          <FormControlLabel
            labelPlacement="start"
            control={
              <Switch
                checked={openCamera}
                onChange={() => {
                  setOpenCamera((prev) => !prev);
                }}
                color="info"
              />
            }
            label="VFC requires you to turn on your camera to detect your posture. Turn on your camera?"
          />
        </Box>
        <Box sx={{ flex: 1, order: { xs: -1, md: 0 } }}>
          <ExerciseBox />
        </Box>
      </Box>
      <Divider sx={{ my: 5, borderBottomWidth: 3 }} />

      <Box>
        <Typography
          variant="h4"
          component="h4"
          fontWeight="bold"
          color="blueviolet"
        >
          Session Details
        </Typography>

        <TableContainer
          component={Paper}
          sx={{
            my: 2,
            borderRadius: 3,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography fontWeight="bold">Attempts</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Sets</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Reps</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Duration</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontWeight="bold">Status</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {foodNutrients.map((nutrient) => ( */}
              <TableRow>
                <TableCell>
                  <Typography>1</Typography>
                </TableCell>
                <TableCell>
                  <Typography>1</Typography>
                </TableCell>
                <TableCell>
                  <Typography>9</Typography>
                </TableCell>
                <TableCell>
                  <Typography>00:04:29</Typography>
                </TableCell>
                <TableCell>
                  {/* <Typography>Incomplete</Typography> */}

                  <Chip
                    color="success"
                    size="small"
                    icon={<Check />}
                    label="Completed"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>1</Typography>
                </TableCell>
                <TableCell>
                  <Typography>1</Typography>
                </TableCell>
                <TableCell>
                  <Typography>9</Typography>
                </TableCell>
                <TableCell>
                  <Typography>00:04:29</Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    color="warning"
                    size="small"
                    icon={<Pending />}
                    label="Incomplete"
                  />
                </TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ExerciseVideo;
