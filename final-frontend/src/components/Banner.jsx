import { ContactSupport, Info, Message } from "@mui/icons-material";
import { Box, Button, Fab, Typography } from "@mui/material";
import React from "react";

const Banner = ({
  title,
  description,
  button,
  btnIcon,
  bgImage,
  focusText,
}) => {
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
          // clipPath: {
          //   xs: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
          //   md: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
          // },
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            height: "100%",
            position: "absolute",
            top: { xs: "30%", md: "50%" },
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
          <Typography
            variant="body1"
            sx={{ color: "white", fontSize: "20px", mr: 1 }}
          >
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
          bgcolor: "orange",
          height: { xs: 40, md: 60 },
          width: { xs: "50%", md: "30%", lg: "20%" },
          position: "absolute",
          top: { xs: "99%", md: "87%", lg: "86%", xl: "86%" },
          right: { xs: "10%", md: "2%" },
          zIndex: 5,
          transform: "skewY(-7deg)",
          // transform: {
          //   xs: "rotate(-10.5deg)",
          //   sm: "rotate(-8.5deg)",
          //   md: "rotate(-10deg)",
          //   lg: "rotate(-7deg)",
          //   xl: "rotate(-6.5deg)",
          // },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {focusText}
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Banner;
