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
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import { errorToast } from "../redux/slices/toastSlice";

const CommentBox = ({ blogId, comments }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [comment, setComment] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user ?? "");

  const profilePictureLink = `${axios.defaults.baseURL}${user?.profilePicture}`;

  const { mutate, isLoading: isPosting } = useMutation(
    (values) => axios.post(`comment/${blogId}`, values),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);
          queryClient.invalidateQueries({ queryKey: ["fetchComments"] });
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

  const postComment = async (e) => {
    e.preventDefault();
    let commentData = { comment: comment };
    mutate(commentData, {
      onSuccess: () => {
        setComment("");
      },
    });
    // try {
    //   const response = await axios.post(`blog-comment-create/${blogId}/`, commentData);
    //   console.log(response);

    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Box>
      {isLoggedIn && (
        <Box
          sx={{ mt: 3, display: "flex", alignItems: "center", gap: 2 }}
          component="form"
          onSubmit={postComment}
        >
          <Avatar
            sx={{ bgcolor: "blueviolet" }}
            src={profilePictureLink}
            alt={user?.firstName}
          />

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
                    disabled={isPosting}
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
          {comments?.map((comment, index) => (
            <Box key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    sx={{ bgcolor: "blueviolet" }}
                    alt={comment?.commenter?.firstName}
                    src={`${axios.defaults.baseURL}${comment?.commenter?.profilePicture}`}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${comment?.commenter?.firstName} ${comment?.commenter?.lastName}`}
                  secondary={
                    <React.Fragment>
                      {moment(comment?.created_at).format("Do MMMM YYYY")}

                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {` —— ${comment?.comment}`}
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
