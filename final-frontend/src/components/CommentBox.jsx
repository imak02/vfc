import { NearMe } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";

const comments = [
  {
    _id: "123456789",
    commenter: { name: "Alia Bhatt", profilePic: "profile.jpeg" },
    comment: "This is a comment or don't you believe me?",
    createdAt: "2023-03-27T03:23:30.787+00:00",
  },
  {
    _id: "12345678",
    commenter: { name: "Ram Ram", profilePic: "profile.jpeg" },
    comment: "I only know two words that are Ram and Ram",
    createdAt: "2023-03-27T03:23:30.787+00:00",
  },
  {
    _id: "1234567",
    commenter: { name: "Ayush Maandhar", profilePic: "profile.jpeg" },
    comment: "La yesma chai Nepali ma lekhna man lagyo malai",
    createdAt: "2023-03-27T03:23:30.787+00:00",
  },
];

const CommentBox = () => {
  const [comment, setComment] = useState("");
  let isLoggedIn = true;

  return (
    <Box>
      {isLoggedIn && (
        <Box
          sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}
          component="form"
        >
          <Avatar alt="P" src="profile.jpeg" />
          <TextField
            id="comment"
            name="comment"
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            variant="outlined"
            placeholder="Add your comment"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    type="submit"
                    aria-label="Post Comment"
                    color="info"
                    // onClick={postComment}
                    //   onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <NearMe />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
      <Box>
        {" "}
        <List
          sx={{ width: "100%", bgcolor: "transparent", ml: { xs: -2, sm: 0 } }}
        >
          {comments.map((comment) => (
            <Box key={comment._id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={comment.commenter.name}
                    src={`${comment?.commenter?.profilePic}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={comment.commenter.name}
                  secondary={
                    <React.Fragment>
                      {moment(comment.createdAt).format("Do MMMM YYYY")}

                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {` —— ${comment.comment}`}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider
                variant="inset"
                component="li"
                sx={{ listStyleType: "none" }}
              />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CommentBox;
