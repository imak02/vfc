import React from "react";
import { keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";

const animatedQuoteHeader = keyframes`
  0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
`;

const FlowText = ({ text }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        className="content"
        sx={{
          color: "white",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 5,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",
            position: "absolute",
            color: "transparent",
            WebkitTextStroke: (theme) =>
              theme.palette.mode === "light" ? "2px black" : "2px white",
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: "bold",
            color: (theme) =>
              theme.palette.mode === "light" ? "black" : "white",
            position: "absolute",
            animation: `${animatedQuoteHeader} 4s ease-in-out infinite`,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default FlowText;
