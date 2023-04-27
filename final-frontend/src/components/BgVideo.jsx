import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

const BgVideo = () => {
  return (
    <div>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          poster="fitness_girl.webp"
          className="main__video"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        >
          <source src="bg_video_1.mp4" type="video/mp4" />
          <img
            src="fitness_girl.webp"
            title="Your browser does not support the <video> tag"
          />
        </video>
      </Box>
    </div>
  );
};

export default BgVideo;
