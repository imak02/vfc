import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const ExerciseBox = () => {
  return (
    <Box>
      <Box>
        <video
          autoPlay
          loop
          muted
          poster="foodPoster.jpg"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        >
          <source src="/exercise.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </Box>
      <Box>
        <Typography variant="h5" component="h3" fontWeight="bold">
          Dumbbell Curl
        </Typography>
        <Typography color="GrayText">2 Sets, 12 Reps</Typography>
        <Divider sx={{ my: 2 }} />
        <Typography>
          Dumbbell curls are arm exercises that target the biceps. Stand with
          dumbbells, curl them up while exhaling, and lower them down while
          inhaling. Alternate arms and focus on proper form. They're great for
          strengthening and toning the biceps.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExerciseBox;
