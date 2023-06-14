import { Close, ContactSupport, Message, Send } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  Collapse,
  Divider,
  Fab,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Slide,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Chatbot = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  return (
    <Box sx={{ position: "relative" }}>
      {!showChatBox && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "90%",
              right: "0",
              display: { xs: "none", md: "flex" },
              zIndex: "999",
            }}
          >
            <Fab
              variant="extended"
              color="info"
              onClick={() => {
                setShowChatBox(true);
              }}
              aria-label="chatbot"
              sx={{ p: 2 }}
            >
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
            <Fab
              color="info"
              onClick={() => {
                setShowChatBox(true);
              }}
              size="small"
              aria-label="chatbot"
              sx={{ p: 2 }}
            >
              <Message />
            </Fab>
          </Box>
        </>
      )}
      <Slide
        direction="up"
        in={showChatBox}
        style={{ transitionDelay: showChatBox ? "200ms" : "0ms" }}
      >
        <Paper
          sx={{
            maxWidth: 400,
            position: "absolute",
            zIndex: "999",
            top: 250,
            right: { xs: 0, md: 10 },
            mx: 1,
          }}
          elevation={5}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box component="img" src="/logo.png" alt="logo" height={30} />
            {/* <Avatar alt="Chatbot" src="/logo.png" /> */}
            <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
              VFC Chatbot
            </Typography>
            <IconButton
              onClick={() => {
                setShowChatBox(false);
              }}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "lightgrey" : "#121212",
              height: { xs: 450, md: 500 },
              p: 2,
            }}
          >
            <Box
              sx={{ display: "inline-flex", flexDirection: "column", gap: 2 }}
            >
              <Box>
                <Chip
                  sx={{
                    height: "auto",
                    "& .MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                      px: 2,
                      py: 1,
                    },
                  }}
                  label={
                    <Typography>
                      "Hi! How may I help you? Hi! How may I help you?Hi! How
                      may I help you?Hi! How may I help you?Hi! How may I help
                      you?Hi! How may I help you?"
                    </Typography>
                  }
                  size="medium"
                />
              </Box>
              <Box sx={{ alignSelf: "flex-end" }}>
                <Chip
                  sx={{
                    height: "auto",
                    "& .MuiChip-label": {
                      display: "block",
                      whiteSpace: "normal",
                      px: 2,
                      py: 1,
                    },
                  }}
                  label={
                    <Typography sx={{ textAlign: "left" }}>Hello</Typography>
                  }
                  size="medium"
                />
              </Box>
            </Box>
          </Box>

          {/* <Box>
          <TextField
            fullWidth
            placeholder="Type your message here..."
            sx={{
              border: "none",
              "&:hover fieldset": {
                borderColor: "yellow",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Send Message" edge="end">
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box> */}
          <Paper
            component="form"
            sx={{
              p: "4px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: "100%",
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Type your message here..."
              inputProps={{ "aria-label": "Chatbot" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Send color="info" />
            </IconButton>
          </Paper>
        </Paper>
      </Slide>
    </Box>
  );
};

export default Chatbot;
