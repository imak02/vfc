import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Fab, Grid, Tooltip, styled } from "@mui/material";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import {
  Accessibility,
  AccountBox,
  Article,
  Fastfood,
  Home,
  Close,
  Menu,
  SelfImprovement,
  Widgets,
  LightMode,
  DarkMode,
  Logout,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { dark, light } from "../redux/slices/themeSlice";
import { logout, setUser } from "../redux/slices/authSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const drawerWidth = 340;

const MyNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  width: "100%",
  color: "text.primary",

  "&:hover, &.active": {
    color: "blueviolet",
  },
}));

function UserProfileLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const dispatch = useDispatch();


  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

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
  const age = moment(new Date(user?.profile?.dob)).fromNow(true);

  const params = useParams();

  const userId = params.id;

  const themeMode = useSelector((state) => state.themeMode.value);

  let isAdmin = false;

  const userPageList = [
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

  const adminPageList = [
    {
      name: "Dashboard",
      id: "dashboard",
      icon: <Widgets color="inherit" />,
      destination: `/admin/${userId}`,
    },
    {
      name: "Users",
      id: "users",
      icon: <SelfImprovement />,
      destination: `/admin/${userId}/users`,
    },
  ];

  const pageList = isAdmin ? adminPageList : userPageList;

  const drawer = (
    <Box sx={{ m: 2 }}>
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Link className="links" to={`/user/${userId}/edit-profile`}>
          <Typography
            sx={{ color: "blueviolet", fontWeight: "bold" }}
            onClick={() => setMobileOpen(false)}
          >
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
            {user?.first_name + " " + user?.last_name}
          </Typography>
          <Typography color="GrayText">
            {user?.gender === "male" && "Male" }{user?.gender === "female" && "Female" }{user?.gender === "others" && "Others" }, {user?.profile?.dob && age}
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
      <List>
        {pageList.map((page) => (
          <ListItem key={page.id} disablePadding>
            <MyNavLink to={page.destination} className="links" end>
              <ListItemButton onClick={() => setMobileOpen(false)}>
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
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: { md: "flex" } }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </IconButton>
          <Box>
            <Link to="/" className="logo__link links">
              <Box
                sx={{
                  display: "flex",
                  transitionDuration: "1s",
                  "&:hover": {
                    transform: "scale(1.2) translateX(20px)",
                  },
                }}
              >
                <Box className="logo__img">
                  <Box component="img" src="/logo.png" height={30} />
                </Box>

                <Typography
                  alignSelf="center"
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    ml: 1,
                    display: { xs: "none", md: "flex" },
                    color: "text.primary",
                  }}
                >
                  Virtual Fitness Coach
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            <Box>
              {themeMode === "light" ? (
                <Tooltip arrow title="Dark mode">
                  <Fab
                    aria-label="DarkMode"
                    size="small"
                    onClick={() => dispatch(dark())}
                  >
                    <DarkMode fontSize="small" />
                  </Fab>
                </Tooltip>
              ) : (
                <Tooltip arrow title="Light mode">
                  <Fab
                    aria-label="LightMode"
                    size="small"
                    onClick={() => dispatch(light())}
                  >
                    <LightMode fontSize="small" />
                  </Fab>
                </Tooltip>
              )}
            </Box>

            <Tooltip arrow title="Signout">
              <Fab
                aria-label="LightMode"
                size="small"
                onClick={() => dispatch(logout())}
                color="info"
              >
                <Logout fontSize="small" />
              </Fab>
              {/* <IconButton edge="start" color="inherit" aria-label="signout">
                <Logout fontSize="large" />
              </IconButton> */}
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{
            padding: { xs: 1, lg: 3 },
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "lightgray" : "black",
            minHeight: "100vh",
          }}
        >
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default UserProfileLayout;
