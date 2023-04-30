import { ContactSupport, Message } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import React from "react";

const Chatbot = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          top: "90%",
          right: "0",
          display: { xs: "none", md: "flex" },
          zIndex: "999",
        }}
      >
        <Fab variant="extended" color="info" aria-label="chatbot" sx={{ p: 2 }}>
          <ContactSupport sx={{ mr: 1 }} /> Let's Chat
        </Fab>
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "90%",
          right: "1%",
          display: { xs: "flex", md: "none" },
          zIndex: "999",
        }}
      >
        <Fab color="info" size="small" aria-label="chatbot" sx={{ p: 2 }}>
          <Message />
        </Fab>
      </Box>
    </Box>
  );
};

export default Chatbot;
