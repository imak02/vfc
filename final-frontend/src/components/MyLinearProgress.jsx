import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography, styled } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 15,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 400],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 15,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#fff",
  },
}));

const MyLinearProgress = ({ value }) => {
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={value} />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          position: "absolute",
          left: "50%",
          top: 15,
          transform: "translate(-50%,0%)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
          }}
        >
          {value}% completed
        </Typography>
      </Box>
    </Box>
  );
};

export default MyLinearProgress;
