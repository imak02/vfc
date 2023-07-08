import React from "react";
import Carousel from "../components/Carousel";
import { Box, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import Banner from "../components/Banner";
import TeamMember from "../components/TeamMember";

const About = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Banner
        title="Characteristics of a successful team"
        description="Successful teams often exhibit strong communication and collaboration skills, a shared sense of purpose and goals, mutual trust and respect among team members, effective leadership, and a diverse range of skills and expertise that complement each other. "
        button="Learn More"
        btnIcon={<Info />}
        bgImage="https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        focusText="VFC Blogs"
      />

      <Box>
        <Typography
          variant="h4"
          component="h5"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Our Team
        </Typography>

        <Box>
          <TeamMember />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
