import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container, Paper } from "@mui/material";
import DietCard from "../components/DietCard";
import MediaContentBox from "../components/MediaContentBox";
import Banner from "../components/Banner";
import Quotes from "../components/Quotes";
import DescriptionCard from "../components/DescriptionCard";
import NumbersCard from "../components/NumbersCard";
import {
  Diversity1,
  Group,
  Info,
  LunchDining,
  RunCircleOutlined,
} from "@mui/icons-material";

export default function Home() {
  return (
    <Box>
      <Banner
        title="What is fitness?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam
            vitae, veniam, illum voluptates similique officia adipisci optio
            nesciunt recusandae dolorum deleniti obcaecati nulla maxime est
            aliquid assumenda. Quia, fugit?"
        button="Learn More"
        btnIcon={<Info />}
        bgImage="/bg.jpg"
      />
      <Quotes />
      <Container maxWidth="xl">
        <Paper elevation={0} sx={{ padding: 2 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "lightcoral", mb: 2 }}
          >
            Why Us?
          </Typography>
          <DescriptionCard
            image="bg.jpg"
            title=" Virtual Fitness Coach brings you your own personal diet plan."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <DescriptionCard
            image="bg.jpg"
            title=" Virtual Fitness Coach suggests the best exercises for you."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <DescriptionCard
            image="bg.jpg"
            title=" Virtual Fitness Coach brings live posture detector."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <DescriptionCard
            image="bg.jpg"
            title=" Virtual Fitness Coach helps you monitor your progress."
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </Paper>
      </Container>
      <Container
        maxWidth="xl"
        // sx={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexDirection: { xs: "column", md: "row" },
        //   gap: 2,
        // }}
      >
        <Typography variant="h3" textAlign="center" sx={{ fontWeight: "bold" }}>
          We deliver the best.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            my: 5,
          }}
        >
          <NumbersCard
            number="10"
            title="Professional Trainers"
            icon={<Group fontSize="inherit" />}
          />
          <NumbersCard
            number="100+"
            title="Diet Plans"
            icon={<LunchDining fontSize="inherit" />}
          />
          <NumbersCard
            number="1000+"
            title="Exercises"
            icon={<RunCircleOutlined fontSize="inherit" />}
          />
          <NumbersCard
            number="10 Lakhs"
            title="Happy Customers"
            icon={<Diversity1 fontSize="inherit" />}
          />
        </Box>
      </Container>

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
