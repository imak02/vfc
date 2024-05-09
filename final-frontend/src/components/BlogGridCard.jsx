import { Favorite } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const BlogGridCard = ({ blog }) => {
  const blogImageLink = `${axios.defaults.baseURL}${blog?.image}`;
  const profilePictureLink = `${axios.defaults.baseURL}${blog?.author?.profilePicture}`;
  const blogId = blog?._id;
  return (
    <Box>
      <Link to={`/blog/${blogId}`} className="links">
        <Card sx={{ width: 350 }}>
          <CardContent>
            <CardMedia
              component="img"
              height={200}
              image={blogImageLink}
              alt="blog"
            />
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", textAlign: "center", my: 5 }}
            >
              {blog?.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <Avatar alt="Remy Sharp" src="/profile.jpeg" /> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Avatar
                  sx={{ bgcolor: "blueviolet" }}
                  src={profilePictureLink}
                  alt={blog?.author?.firstName}
                />

                <Typography variant="body1">{`${blog?.author?.firstName} ${blog?.author?.lastName}`}</Typography>
              </Box>
              {/* userLikedBlogs */}
              <Tooltip title="Like">
                <Fab color="primary" aria-label="like" size="small">
                  <Badge color="error" badgeContent={blog?.likes?.length}>
                    <Favorite fontSize="medium" />
                  </Badge>
                </Fab>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default BlogGridCard;
