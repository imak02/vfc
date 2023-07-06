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
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { errorToast } from "../redux/slices/toastSlice";

const Chatbot = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [question, setQuestion] = useState("");
  const [thread, setThread] = useState([]);

  const dispatch = useDispatch();

  const handleClose = async () => {
    setThread([]);
    setShowChatBox(false);

    try {
      const response = await axios.delete("http://localhost:5000/query/");
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }

  const handleQuestionChange = (e) => { setQuestion(e.target.value) };
  const handleSubmit = (e) => {
    e.preventDefault();
    let sendData = { question: question };
    // console.log(sendData);
    mutate(sendData, {
      onSuccess: () => {
        // setThread((prev) => [...prev, {question:question}]);
        setQuestion("");
      },
    });

  }

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("http://localhost:5000/query/", values),
    {
      onMutate: () => {
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data.data);
          setThread((prev) => [...prev, data.data]);
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          dispatch(errorToast(error?.response?.data?.message));
        } else {
          console.log(error);
          dispatch(errorToast(error?.response?.data?.message));
        }
      },
    }
  );

  console.log(thread);



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
              zIndex: 999,
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
            width: { xs: 300, md: 400 },
            maxWidth: 400,
            position: "fixed",
            zIndex: 9999,
            bottom: 10,
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
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Box>
          <Box
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? "lightgrey" : "#121212",
              width: { xs: 300, md: 400 },

              height: { xs: 450, md: 500 },
              p: 2,
              overflowY: "scroll"

            }}
          >
            {thread.map((chat) => <Box
              sx={{
                display: "inline-flex", flexDirection: "column", gap: 2,
                width: "100%",
                my: 2,
              }}
            >

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
                    <Typography sx={{ textAlign: "left" }}>{chat.Question}</Typography>
                  }
                  size="medium"
                />
              </Box>

              <Box sx={{ alignSelf: "flex-start" }}>
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
                      {chat.Answer}
                    </Typography>
                  }
                  size="medium"
                />
              </Box>








              {/* {thread.map((chat) =>
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
                      <Typography sx={{ textAlign: "left" }}>{chat}</Typography>
                    }
                    size="medium"
                  />
                </Box>
              )} */}
              {/* <Chip
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
                  <Typography sx={{ textAlign: "left" }}>{thread[0]}</Typography>
                }
                size="medium"
              /> */}
            </Box>)}
          </Box>
          {/* </Box> */}

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
            onSubmit={handleSubmit}
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
              value={question}
              onChange={handleQuestionChange}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <Send color="info" />
            </IconButton>
          </Paper>
        </Paper>
      </Slide>
    </Box >
  );
};

export default Chatbot;
