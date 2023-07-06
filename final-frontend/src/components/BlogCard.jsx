import {
  AccessTime,
  BookmarkAdd,
  Comment,
  Favorite,
  MoreVert,
  OpenInNew,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Collapse,
  Divider,
  Fab,
  IconButton,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import CommentBox from "./CommentBox";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { errorToast } from "../redux/slices/toastSlice";
import { useDispatch } from "react-redux";

// const blog = {
//   _id: "1234579",
//   author: {
//     profilePic: "profile.jpeg",
//     name: "John Smith",
//     username: "johnny",
//   },
//   createdAt: "2023-03-27T03:23:30.787+00:00",
//   image: "bg.jpg",
//   title: "This is a simple blog example ample",
//   description:
//     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.",
// };

const BlogCard = ({ blog }) => {
  const [showComments, setShowComments] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const blogId = blog?.id;


  const { mutate: likeMutate } = useMutation(
    () => axios.post(`blog-like-create/${blogId}/`),
    {

      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          queryClient.invalidateQueries({ queryKey: ['blogs'] });
          console.log(data);

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

  const { mutate: saveMutate } = useMutation(
    () => axios.post(`blog-save-create/${blogId}/`),
    {

      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);

          queryClient.invalidateQueries({ queryKey: ['blogs'] });

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



  const fetchComments = async () => await axios.get(`blog/${blogId}/comments/`);

  const commentResult = useQuery({
    queryKey: ['fetchComments', blogId], queryFn: fetchComments, onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data.data);
      }
    },
    onError: (error) => {
      dispatch(errorToast(error?.response?.data?.error));
    },
  },);



  const comments = commentResult?.data?.data;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Paper elevation={5} sx={{ maxWidth: 900 }}>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={`${blog?.author?.profile?.profilePicture}`}
                alt={blog?.author?.first_name}
              >
                {blog?.author?.first_name}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={`${blog?.author?.first_name} ${blog?.author?.last_name}`}
            subheader={moment(blog?.created_at).fromNow()}
            sx={{ display: { xs: "flex", md: "none" } }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              px: 2,
              pt: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {blog.title}
            </Typography>

            <Typography
              variant="body1"
              color="GrayText"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "flex-end",
                maxWidth: 200,
              }}
            >
              <AccessTime sx={{ alignSelf: "center" }} fontSize="inherit" />{" "}
              {moment(blog?.created_at).fromNow()}
            </Typography>
          </Box>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                mb: { xs: 4 },
              }}
              gap={3}
            >
              <Box component="img" src={blog.image} height={200} width={300} />
              <Typography
                variant="body1"
                alignSelf="flex-start"
                sx={{
                  overflowWrap: "break-word",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {blog.description.length > 500
                  ? blog.description.substring(0, 500) + "..."
                  : blog.description}
                <>
                  <br />
                  <Link to={`/blog/${blog.id}`} className="links">
                    <Button
                      endIcon={<OpenInNew />}
                      size="small"
                      variant="contained"
                      sx={{
                        borderRadius: "30px",
                        boxShadow: "none",
                        mt: { xs: 2, md: 1 },
                        "&:hover": { bgcolor: "red", boxShadow: "none" },
                      }}
                    >
                      Read More
                    </Button>
                  </Link>
                </>
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={2}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{ bgcolor: "red" }}
                  src={`${blog?.author?.profile?.profilePicture}`}
                  alt={blog?.author?.first_name}
                >
                  {blog?.author?.first_name}
                </Avatar>
                <Typography variant="body1">
                  {`${blog.author.first_name} ${blog.author.last_name}`}
                </Typography>
              </Box>
              <Box display="flex" gap={2}>
                <Tooltip title="Like">
                  <Fab color="primary" aria-label="like" size="small" onClick={() => { likeMutate() }}>
                    <Badge color="error" badgeContent={blog?.likes_count}>
                      <Favorite fontSize="medium" />
                    </Badge>
                  </Fab>
                </Tooltip>

                <Tooltip title="Comment">
                  <Fab
                    color="primary"
                    aria-label="comment"
                    size="small"
                    onClick={() => {
                      setShowComments((prev) => !prev);
                    }}
                  >
                    <Badge color="error" badgeContent={blog?.comments_count}>
                      <Comment fontSize="medium" />
                    </Badge>
                  </Fab>
                </Tooltip>

                {/* <Tooltip title="Share">
                  <Fab color="primary" aria-label="share" size="small">
                    <Badge color="error" badgeContent={100}>
                      <Share fontSize="medium" />
                    </Badge>
                  </Fab>
                </Tooltip> */}

                <Tooltip title="Save">
                  <Fab color="primary" aria-label="save" size="small" onClick={() => { saveMutate() }}>
                    <Badge color="error" badgeContent={blog?.saves_count}>
                      <BookmarkAdd fontSize="medium" />
                    </Badge>
                  </Fab>
                </Tooltip>
              </Box>
            </Box>

            {/* {showComments && ( */}
            {/* <Collapse in={showComments} timeout={800}>
              <Box sx={{ mt: 4 }}>
                <Divider>
                  <Chip label="COMMENTS" />
                </Divider>
                <CommentBox />
              </Box>
            </Collapse> */}

            <Collapse in={showComments} timeout={800}>
              <Box sx={{ mt: 4 }}>
                <Divider>
                  <Chip label="COMMENTS" />
                </Divider>
                <CommentBox blogId={blogId} comments={comments} />
              </Box>
            </Collapse>
            {/* )} */}
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default BlogCard;
