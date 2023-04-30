import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import OutboundIcon from "@mui/icons-material/Outbound";
import React from "react";

const MediaContentBox = ({
  height,
  width,
  source,
  videoType,
  title,
  description,
  destination,
}) => {
  return (
    <Paper elevation={2} sx={{ p: 2, my: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          maxHeight={500}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              height: height,
              width: width,
              overflow: "hidden",
            }}
          >
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
              <source src={source} type={videoType} />
              Your browser does not support the video tag
            </video>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              px: { md: 4, lg: 8 },
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "18px", fontWeight: "light" }}
            >
              {description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: { sm: "30%", md: "50%", lg: "40%", xl: "30%" },
                alignSelf: "flex-end",
              }}
              endIcon={<OutboundIcon />}
            >
              Check out{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MediaContentBox;
