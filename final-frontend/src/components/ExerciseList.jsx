import { PlayCircle } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseList = () => {
  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box>
        <Typography variant="h6">Dumbell Curl</Typography>
        <Typography variant="body2" component="p" color="GrayText">
          2 sets 15 reps
        </Typography>
        <Typography variant="body2" component="p" color="GrayText">
          300 Kcal
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Link to="/user/123/exercise-video" className="links">
          <IconButton size="large" color="info">
            <PlayCircle fontSize="large" />
          </IconButton>

          <Typography
            variant="h6"
            component="h3"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Start Now
          </Typography>
        </Link>
      </Box>
      <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
        <Link to="/" className="links">
          <Box
            component="img"
            sx={{ borderRadius: 3 }}
            height={100}
            width={200}
            alt="diet"
            src="https://images.unsplash.com/photo-1674834726923-3ba828d37846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default ExerciseList;
