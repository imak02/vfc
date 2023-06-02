import { Box, Card, CardContent, Typography } from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import React from "react";

const MyCircularProgress = (props) => (
  <Box sx={{ position: "relative" }}>
    <CircularProgress
      variant="determinate"
      sx={{
        color: (theme) => (theme.palette.mode === "light" ? "grey" : "white"),
      }}
      size={150}
      thickness={3}
      {...props}
      value={100}
    />
    <CircularProgress
      variant="determinate"
      disableShrink
      sx={{
        color: (theme) => (theme.palette.mode === "light" ? "white" : "#000"),
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
);

const DbCard = ({ title, subtitle, value }) => {
  return (
    <Box>
      <Card
        sx={{
          width: 350,
          height: 200,
          backgroundImage:
            "linear-gradient(90deg, rgba(63,94,251,0.6) 0%, rgba(252,70,107,0.6) 100%),url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
          position: "relative",
          color: "white",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", right: 20, top: 30 }}>
            <MyCircularProgress value={value} />
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                fontWeight: "bold",
              }}
            >
              {value}%
            </Typography>
          </Box>
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Box sx={{ position: "absolute", bottom: 20, left: 20 }}>
            <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {subtitle}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DbCard;
