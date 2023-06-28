import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import MyCircularProgress from "./MyCircularProgress";

const DbCard = ({ title, subtitle, value, width, height, image }) => {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "100%", xl: width },
          height: { xs: 200, xl: height },
          backgroundImage: `linear-gradient(90deg, rgba(63,94,251,0.6) 0%, rgba(252,70,107,0.6) 100%),url(${image})`,
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
