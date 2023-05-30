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

const BlogGridCard = () => {
  return (
    <Box>
      <Card sx={{ width: 350 }}>
        <CardContent>
          <CardMedia
            component="img"
            height={200}
            image="/foodPoster.jpg"
            alt="blog"
          />
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold", textAlign: "center", my: 5 }}
          >
            Why red meat is bad?
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
                src="/profile.jpeg"
                alt="John Cena"
              >
                John Cena
              </Avatar>
              <Typography variant="body1">John Cena </Typography>
            </Box>
            <Tooltip title="Like">
              <Fab color="info" aria-label="like" size="small">
                <Badge color="error" badgeContent={9}>
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
