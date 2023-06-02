import {
  Accessibility,
  AccountBox,
  Article,
  Fastfood,
  Home,
  SelfImprovement,
  Widgets,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const pageList = [
  {
    name: "Dashboard",
    id: "dashboard",
    icon: <Widgets color="inherit" />,
    destination: "/",
  },
  {
    name: "Profile",
    id: "profile",
    icon: <AccountBox />,
    destination: "/user/123",
  },
  { name: "Diet", id: "diet", icon: <Fastfood />, destination: "/diet" },
  { name: "Blogs", id: "blog", icon: <Article />, destination: "/blog" },
  { name: "Body", id: "body", icon: <Accessibility />, destination: "/body" },
  {
    name: "Exercises",
    id: "exercises",
    icon: <SelfImprovement />,
    destination: "/exercises",
  },
];

const MyNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  color: "black",

  "&:hover, &.active": {
    color: "blueviolet",
  },
}));

const UserSideBar = () => {
  return (
    <Paper elevation={2}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="text" color="info">
          Edit
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Avatar
          sx={{ bgcolor: "blue", width: 80, height: 80 }}
          alt="Profile"
          src="/profile.jpeg"
        >
          A
        </Avatar>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
            Shraddha Kapoor
          </Typography>
          <Typography color="GrayText">Female, 23 years</Typography>
        </Box>
      </Box>

      <Box sx={{ my: 3 }}>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            p: 1,
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h6" component="h3" color="blueviolet">
              Height
            </Typography>
            <Typography variant="h5" component="h3">
              185
              <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                cm
              </Typography>
            </Typography>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography variant="h6" component="h3" color="blueviolet">
              Weight
            </Typography>
            <Typography variant="h5" component="h3">
              90
              <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                kg
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Divider />
      </Box>

      <Box>
        <List sx={{ pb: 5 }}>
          {pageList.map((page) => (
            <ListItem key={page.id}>
              <MyNavLink to={page.destination} className="links">
                <ListItemButton>
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {page.icon}
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">{page.name}</Typography>
                  </ListItemText>
                </ListItemButton>
              </MyNavLink>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* <Box>
        {pageList.map((page) => (
          <MyNavLink to={page.destination}>
            <Box
              key={page.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                px: 10,
                py: 2,
                gap: 2,
              }}
            >
              {page.icon}
              <Typography>{page.name}</Typography>
            </Box>
          </MyNavLink>
        ))}
      </Box> */}
    </Paper>
  );
};

export default UserSideBar;
