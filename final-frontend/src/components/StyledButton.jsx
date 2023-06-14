import { Box, Button, Typography, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";

const MyButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: 32,
  padding: "1rem 2rem",
  borderRadius: 15,
  background: "#3d3a4e",
  backgroundSize: "400%",
  color: "white",
  border: "none",

  "&:hover:before": {
    transform: "scaleX(1)",
  },

  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    transform: "scaleX(0)",
    transformOrigin: "0 50%",
    width: "100%",
    height: 32,
    background:
      "linear-gradient(82.3deg,rgba(150, 93, 233, 0.8) 10.8%, rgba(99, 88, 238, 1) 94.3%)",
    transition: "all 0.47s ease",
  },

  ".MuiButton-endIcon": {
    position: "relative",
    zIndex: 1,
  },
}));

const StyledButton = ({ icon, text }) => {
  console.log(text);
  return (
    <Box>
      <MyButton variant="contained" size="large" endIcon={icon}>
        <Typography sx={{ zIndex: 1, position: "relative" }}>{text}</Typography>
      </MyButton>
    </Box>
  );
};

export default StyledButton;
