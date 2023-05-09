import { ContactSupport, Info, Message } from "@mui/icons-material";
import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";

const Banner = ({ title, description, button, btnIcon, bgImage }) => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bgImage}), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
          minHeight: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          //   mb: 100,
          clipPath: {
            xs: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
            md: "polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            height: "100%",
            position: "absolute",
            top: { xs: "40%", md: "50%" },
            left: "5%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            color="white"
            sx={{ fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "white", fontSize: "20px" }}>
            {description}
          </Typography>
          {button && (
            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                endIcon={btnIcon}
              >
                {button}
              </Button>
            </Box>
          )}
        </Box>
      </Box>

      {/* <Box
        sx={{
          bgcolor: "pink",
          height: 100,
          width: "40%",
          position: "absolute",
          top: "86%",
          right: "2%",
          zIndex: 5,
          transform: "rotate(-5.8deg)",
        }}
      /> */}
    </Box>
  );
};

export default Banner;
