import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MyCircularProgress from "./MyCircularProgress";

const DbBannerCard = ({ title, subtitle, value }) => {
  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          height: 300,
          backgroundImage:
            "linear-gradient(90deg, rgba(63,94,251,0.6) 0%, rgba(252,70,107,0.6) 100%),url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", right: 40, top: 80 }}>
            <MyCircularProgress value={value} mycolor="skyblue" />
          </Box>
        </Box>

        <CardContent sx={{ textAlign: "center" }}>
          <Box sx={{ position: "absolute", bottom: 30, left: 30 }}>
            <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "medium" }}>
              {subtitle}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DbBannerCard;
