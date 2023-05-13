import { NavigateNext } from "@mui/icons-material";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const DescriptionCard = ({ title, description, image, video }) => {
  return (
    <Box sx={{ my: 6 }}>
      <Grid container gap={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10} md={5}>
          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ width: "90%" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
            <Typography>{description}</Typography>
            <Box>
              <Button variant="contained" endIcon={<NavigateNext />}>
                Try Now
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={10}
          md={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ maxHeight: 500, maxWidth: 500 }}>
            {image && (
              <Box
                component="img"
                height="100%"
                width="100%"
                src={image}
                alt="Why us"
                borderRadius={1}
              />
            )}

            {video && (
              <video
                autoPlay
                loop
                muted
                poster="foodPoster.jpg"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              >
                <source src={video?.src} type={video?.type} />
                Your browser does not support the video tag
              </video>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DescriptionCard;
