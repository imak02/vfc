import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DietCard from "../components/DietCard";
import MediaContentBox from "../components/MediaContentBox";

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
            textAlign: "left",
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
        {/* <Box>
          <MediaContentBox
            height="100%"
            width="100%"
            source="food1.mp4"
            videoType="video/mp4"
            title="Eating food the right way..."
            description="Many of our health recommendations boil down to reducing certain nutrients and emphasizing others but you don’t eat a nutrient — say fiber — in isolation. Health recommendations based on these reductionist principles can be very misleading. Sticking with the fiber example, there’s a tremendous difference between a fiber-rich quinoa and vegetable nourish bowl and a fiber-enhanced powdered supplement drink taken with a fast-food meal. Both meals might provide the same amount of an individual nutrient (fiber), but other than that, these two meals aren’t comparable."
          />
          <MediaContentBox
            height="100%"
            width="100%"
            source="food1.mp4"
            videoType="video/mp4"
            title="Nutrients and health- human body needs"
            description="Nutrients give your body energy and enable bodily functions. They are usually classified in two major groups: Macronutrients, in the form of protein, carbohydrate, or fat, primarily provide energy to your body. The different macronutrients serve different energy pathways and functions in the body."
          />
        </Box> */}
      </Box>
    </Box>
  );
}
