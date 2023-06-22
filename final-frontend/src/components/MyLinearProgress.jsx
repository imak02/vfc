import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Typography, styled } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(
  ({ theme, height, mycolor }) => ({
    height: height,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 400],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 15,
      backgroundColor: theme.palette.mode === "light" ? mycolor : "#fff",
    },
  })
);

const MyLinearProgress = ({ value, height, color, showValue }) => {
  return (
    <Box>
      <BorderLinearProgress
        variant="determinate"
        value={value}
        height={height}
        mycolor={color}
      />
      {showValue && (
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
      )}
    </Box>
  );
};

export default MyLinearProgress;
