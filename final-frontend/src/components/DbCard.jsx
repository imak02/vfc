import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MyCircularProgress from "./MyCircularProgress";

const DbCard = ({ title, subtitle, value, width, height }) => {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: 350, xl: width },
          height: { xs: 200, xl: height },
          backgroundImage:
            "linear-gradient(90deg, rgba(63,94,251,0.6) 0%, rgba(252,70,107,0.6) 100%),url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
          position: "relative",
          color: "white",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", right: 20, top: 30 }}>
            <MyCircularProgress value={value} mycolor="white" />
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
