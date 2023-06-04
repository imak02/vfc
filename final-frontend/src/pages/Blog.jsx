import React, { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Menu,
  fabClasses,
  MenuItem,
  Chip,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grow,
} from "@mui/material";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import { Directions, Drafts, Inbox, Info, Search } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CurvePath from "../components/CurvePath";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Blog = () => {
  const [showCategories, setShowCategories] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fetchBlogs = async () => await axios.get("view-blog-list/");
  const { data, isLoading, isError, error } = useQuery("blogs", fetchBlogs, {
    onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data.data);
      }
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const open = Boolean(showCategories);
  const handleClick = (event) => {
    setShowCategories(event.currentTarget);
  };
  const handleClose = () => {
    setShowCategories(null);
  };
  return (
    <Box>
      <Banner
        title="What is fitness?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam
            vitae, veniam, illum voluptates similique officia adipisci optio
            nesciunt recusandae dolorum deleniti obcaecati nulla maxime est
            aliquid assumenda. Quia, fugit?"
        button="Learn More"
        btnIcon={<Info />}
        bgImage="/bg2.jpg"
        focusText="VFC Blogs"
      />
      {/* <Divider component="div" role="presentation" sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          All Blogs
        </Typography>
      </Divider> */}
      <CurvePath>
        {" "}
        <Box
          sx={{
            display: { xl: "flex" },
            bgcolor: "orange",
            px: 2,
            mt: -2,
          }}
        >
          <Link to="/create-blog">Create</Link>

          <Box
            sx={{
              display: { xs: "flex", xl: "none" },
              justifyContent: "center",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 0",
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: 900,
                m: 2,
              }}
            >
              <IconButton
                sx={{ p: "10px" }}
                aria-label="menu"
                id="category-button"
                aria-controls={open ? "category-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="category-menu"
                anchorEl={showCategories}
                open={open}
                transitionDuration={300}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "category-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Typography sx={{ textAlign: "center", width: "100%" }}>
                    All Blogs
                  </Typography>
                </MenuItem>
                <Divider>Categories</Divider>
                <MenuItem onClick={handleClose}>
                  <Typography sx={{ textAlign: "center", width: "100%" }}>
                    Food and Diet
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography sx={{ textAlign: "center", width: "100%" }}>
                    Exercise
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Typography sx={{ textAlign: "center", width: "100%" }}>
                    Health
                  </Typography>
                </MenuItem>
              </Menu>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Blogs"
                inputProps={{ "aria-label": "search blogs" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: 360,
              display: { xs: "none", xl: "flex" },
              // bgcolor: "background.paper",
            }}
          >
            <Paper elevation={2} sx={{ mx: 2, width: "100%", height: 260 }}>
              <List component="nav" aria-label="categories">
                <ListItemButton
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary="All Blogs"
                  />
                </ListItemButton>
                <Divider sx={{ my: 1 }}>
                  <Chip label="Categories" />
                </Divider>
                <ListItemButton
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemText
                    primary="Food and Diet"
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>

                <ListItemButton
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <ListItemText
                    primary="Exercise"
                    sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
                <ListItemButton
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <ListItemText primary="Health" sx={{ textAlign: "center" }} />
                </ListItemButton>
              </List>
            </Paper>
          </Box>

          <Box sx={{ flex: 3 }}>
            <Box>
              <Divider textAlign="left" sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Food and Diet
                </Typography>
              </Divider>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: { xs: "none", xl: "flex" } }}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                height: "50px",
                width: "100%",
                mx: 2,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Blogs"
                inputProps={{ "aria-label": "search blogs" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <Search />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </CurvePath>
    </Box>
  );
};

export default Blog;
