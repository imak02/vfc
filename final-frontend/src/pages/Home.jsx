import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DietCard from "../components/DietCard";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
        <video
          autoPlay
          loop
          muted
          poster="homeBg.jpg"
          className="main__video"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        >
          <source src="bg_video_1.mp45" type="video/mp4" />
          <img
            src="homeBg.jpg"
            title="Your browser does not support the <video> tag"
          />
        </video>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            width: { xs: "70%", md: "40%" },
            top: "20%",
            left: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            // backgroundColor: "yellow",
            textAlign: "left",
            // md: {
            //   top: "40%",
            //   width: "40%",
            //   alignItems: "flex-start",
            //   textAlign: "left",
            // },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: "600",
              fontStyle: "italic",
              mb: "20px",
            }}
          >
            Interactive fitness reimagined
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontWeight: "500", lineHeight: 2 }}
          >
            Bring home Live Events, on-demand Global Workouts and Studio
            Classes.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ width: "200px", mt: "40px" }}
          >
            Learn More
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
          <DietCard />
        </Box>
      </Box>
    </Box>
  );
}
