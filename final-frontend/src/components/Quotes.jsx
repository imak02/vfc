import { FormatQuote } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Quotes = () => {
  return (
    <Box
      sx={{
        mt: { xs: "-10vh", md: "-20vh" },
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
          }}
        >
          Quote of the day
        </Typography>
        <FormatQuote
          sx={{ fontSize: { xs: "50px", md: "100px" }, fontWeight: "lighter" }}
        />
        <Typography variant="caption" sx={{ fontSize: 24 }}>
          The only person you are destined to become is the person you decide to
          be.
        </Typography>
        <Typography variant="h6" textAlign="end" sx={{ mt: 3 }}>
          - Eleana D'Cruz
        </Typography>
      </Box>
    </Box>
  );
};

export default Quotes;
