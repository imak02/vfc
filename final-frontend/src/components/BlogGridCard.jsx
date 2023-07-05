import { Favorite } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const BlogGridCard = ({blog}) => {
  return (
    <Box>
      <Card sx={{ width: 350 }}>
        <CardContent>
          <CardMedia
            component="img"
            height={200}
            image={blog?.blog?.image}
            alt="blog"
          />
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold", textAlign: "center", my: 5 }}
          >
           {blog?.blog?.title}
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
                sx={{ bgcolor: "red" }}
                src={blog?.blog?.author?.profile?.profilePicture}
                alt="John Cena"
              >
                {`${blog?.blog?.author?.first_name} ${blog?.blog?.author?.last_name}`}
              </Avatar>
              <Typography variant="body1">{`${blog?.blog?.author?.first_name} ${blog?.blog?.author?.last_name}`}</Typography>
            </Box>
            <Tooltip title="Like">
              <Fab color="info" aria-label="like" size="small">
                <Badge color="error" badgeContent={blog?.blog?.likes_count}>
                  <Favorite fontSize="medium" />
                </Badge>
              </Fab>
            </Tooltip>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogGridCard;
