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
import React from "react";
import { Link } from "react-router-dom";

const BlogGridCard = ({blog}) => {
  const blogId = blog?.id;
  return (
    <Box>
       
      <Link to={`/blog/${blogId}`} className="links">
      <Card sx={{ width: 350 }}>
        <CardContent>
          <CardMedia
            component="img"
            height={200}
            image={blog?.image}
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
                src={blog?.author?.profile?.profilePicture}
                alt={blog?.author?.first_name}
              />
             
              <Typography variant="body1">{`${blog?.author?.first_name} ${blog?.author?.last_name}`}</Typography>
            </Box>
            {/* userLikedBlogs */}
            <Tooltip title="Like">
              <Fab color="primary" aria-label="like" size="small">
                <Badge color="error" badgeContent={blog?.likes_count}>
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
