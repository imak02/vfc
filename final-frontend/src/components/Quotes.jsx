import { FormatQuote } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { keyframes } from "@mui/system";

import React from "react";

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

const Quotes = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill={isDarkMode ? "#ffffff14" : "#ffa500"}
          fillOpacity="1"
          d="M0,64L34.3,106.7C68.6,149,137,235,206,234.7C274.3,235,343,149,411,138.7C480,128,549,192,617,181.3C685.7,171,754,85,823,96C891.4,107,960,213,1029,229.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : "action.hover",
          mt: -0.9,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
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
              Quote of the day
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
              Quote of the day
            </Typography>
          </Box>
          {/* <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
            }}
          >
            Quote of the day
          </Typography> */}

          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            <FormatQuote
              sx={{
                fontSize: { xs: "50px", md: "100px" },
                fontWeight: "lighter",
              }}
            />
            The only person you are destined to become is the person you decide
            to be.
          </Typography>
          <Typography variant="h6" textAlign="end" sx={{ mt: 3 }}>
            - Eleana D'Cruz
          </Typography>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill={isDarkMode ? "#ffffff14" : "#ffa500"}
          fillOpacity="1"
          d="M0,64L34.3,106.7C68.6,149,137,235,206,234.7C274.3,235,343,149,411,138.7C480,128,549,192,617,181.3C685.7,171,754,85,823,96C891.4,107,960,213,1029,229.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </Box>
  );
};

export default Quotes;
