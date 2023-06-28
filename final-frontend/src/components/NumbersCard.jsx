import { Diversity1, TitleSharp } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";

const NumbersCard = ({ number, title, icon }) => {
  return (
    <Box>
      <Card
        sx={{
          width: 350,
          bgcolor: (theme) =>
            theme.palette.mode === "light" ? "lightgray" : "#121212",
          "&:hover": {
            bgcolor: "skyblue",
            transform: "scale(1.1)",
            transition: "0.7s ease-out",
          },
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Box sx={{ fontSize: "80px" }}>{icon}</Box>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {number}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NumbersCard;
