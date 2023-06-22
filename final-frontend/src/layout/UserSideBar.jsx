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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import MobileNavTabs from "../components/MobileNavTabs";
import { setUser } from "../redux/slices/authSlice";

const MyNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  color: "text.primary",

  "&:hover, &.active": {
    color: "blueviolet",
  },
}));

const UserSideBar = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const getCurrentUser = async () => await axios.get("user-profile/");

  const userResult = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        dispatch(setUser(data.data.payload));
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const user = useSelector((state) => state.auth.user ?? "");
  console.log(user);

  //   var a = moment([2008, 9]);
  // var b = moment([2007, 0]);
  // a.diff(b, 'years');

  const age = moment(new Date(user?.profile?.dob)).fromNow(true);

  const userId = params.id;
  const pageList = [
    {
      name: "Dashboard",
      id: "dashboard",
      icon: <Widgets color="inherit" />,
      destination: `/user/${userId}`,
    },
    {
      name: "Profile",
      id: "profile",
      icon: <AccountBox />,
      destination: `/user/${userId}/profile`,
    },
    {
      name: "Body",
      id: "body",
      icon: <Accessibility />,
      destination: `/user/${userId}/body`,
    },
    {
      name: "Diet",
      id: "diet",
      icon: <Fastfood />,
      destination: `/user/${userId}/diet`,
    },
    {
      name: "Blogs",
      id: "blog",
      icon: <Article />,
      destination: `/user/${userId}/blogs`,
    },
    {
      name: "Exercises",
      id: "exercises",
      icon: <SelfImprovement />,
      destination: `/user/${userId}/exercises`,
    },
  ];
  return (
    <Box>
      <Paper elevation={2}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <Link className="links" to={`/user/${userId}/edit-profile`}>
            <Typography sx={{ color: "blueviolet", fontWeight: "bold" }}>
              Edit
            </Typography>
          </Link>
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
            src={user?.profile?.profilePicture}
          >
            A
          </Avatar>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
              {user.first_name + " " + user.last_name}
            </Typography>
            <Typography color="GrayText">
              {user.gender}, {age}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ my: 3, py: 3 }}>
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
          <List
            sx={{
              pb: 5,
              display: { xs: "none", md: "block" },
            }}
          >
            {pageList.map((page) => (
              <ListItem key={page.id}>
                <MyNavLink to={page.destination} className="links" end>
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

      <Paper sx={{ display: { xs: "block", md: "none" }, p: 1 }}>
        <MobileNavTabs />
      </Paper>
    </Box>
  );
};

export default UserSideBar;
