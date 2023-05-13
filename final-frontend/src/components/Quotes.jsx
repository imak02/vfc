import React from "react";
import { FormatQuote } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

import FlowText from "./FlowText";
import CurvePath from "./CurvePath";

const Quotes = () => {
  return (
    <Box>
      <CurvePath>
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
            <FlowText text="Quote of the day" />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              <FormatQuote
                sx={{
                  fontSize: { xs: "50px", md: "100px" },
                  fontWeight: "lighter",
                }}
              />
              The only person you are destined to become is the person you
              decide to be.
            </Typography>
            <Typography variant="h6" textAlign="end" sx={{ mt: 3 }}>
              - Eleana D'Cruz
            </Typography>
          </Box>
        </Box>
      </CurvePath>
    </Box>
  );
};

export default Quotes;
