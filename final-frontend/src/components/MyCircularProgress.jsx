import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses,
} from "@mui/material";

const MyCircularProgress = (props) => (
  <Box sx={{ position: "relative" }}>
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) => (theme.palette.mode === "light" ? "grey" : "black"),
        }}
        size={150}
        thickness={3}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "blueviolet" : "white",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={150}
        thickness={3}
        value={props.value}
        {...props}
      />
    </Box>
    <Box>
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontWeight: "bold",
          color: (theme) =>
            theme.palette.mode === "light" ? "blueviolet" : "white",
        }}
      >
        {props.value}%
      </Typography>
    </Box>
  </Box>
);

export default MyCircularProgress;
