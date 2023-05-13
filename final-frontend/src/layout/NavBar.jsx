import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import {
  Chip,
  CircularProgress,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, NavLink } from "react-router-dom";
import {
  DarkMode,
  Fitbit,
  LightMode,
  Logout,
  PersonAdd,
  PersonPin,
  Settings,
} from "@mui/icons-material";
import "./Navbar.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setUser } from "../redux/slices/authSlice";
import axios from "axios";
import { dark, light } from "../redux/slices/themeSlice";
import { useQuery } from "@tanstack/react-query";

const pages = ["Home", "About", "Diet", "Blog"];
const pageList = [
  { name: "Home", id: "home", icon: <InboxIcon />, destination: "/" },
  { name: "About", id: "about", icon: <InboxIcon />, destination: "/about" },
  { name: "Diet", id: "diet", icon: <InboxIcon />, destination: "/diet" },
  { name: "Blog", id: "blog", icon: <InboxIcon />, destination: "/blog" },
];

const pagesIcons = [<InboxIcon />, <MailIcon />, <InboxIcon />];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settingsList = [
  { name: "Profile", id: "profile", destination: "/profile" },
  { name: "Account", id: "account", destination: "/profile" },
  { name: "Dashboard", id: "dashboard", destination: "/Dashboard" },
  { name: "Logout", id: "logout", destination: "/" },
];

function NavBar() {
  //   const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [leftSideBar, setLeftSideBar] = useState({
    left: false,
  });
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const getCurrentUser = async () => await axios.get("/users/current-user");

  const userResult = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    onSuccess: (data) => {
      if (data.status === 200) {
        dispatch(setUser(data.data.data));
      }
    },
    onError: (error) => {
      console.log(error);
    },
    enabled: !!isLoggedIn,
  });

  const user = useSelector((state) => state.auth.user ?? "");
  const themeMode = useSelector((state) => state.themeMode.value);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLeftSideBar({ ...leftSideBar, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pageList.map((page, index) => (
          <ListItem key={page.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };

  //   const handleCloseNavMenu = () => {
  //     setAnchorElNav(null);
  //   };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="false">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* <Link to="/">
            <MonitorHeart
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "black",
              }}
            />
          </Link> */}
          {/* <Link to="/"> */}
          {/* <Typography
            variant="h6"
            component="a"
            noWrap
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {" "}
            eat-N-fit
          </Typography> */}
          {/* </Link> */}
          {/* Large Screen View */}
          <Link to="/" className="logo__link">
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                // sx={{
                //   transition: "1s",
                //   "&:hover": { transform: "rotate(360deg)" },
                // }}
                className="logo__img"
              >
                <Box component="img" src="logo.png" height={50} />
              </Box>
              <Typography
                alignSelf="center"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  ml: 3,
                  transitionDuration: "1s",
                  "&:hover": { transform: "scale(1.2)" },
                }}
              >
                Virtual Fitness Coach
              </Typography>
            </Box>
          </Link>
          {/* <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 1,
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",

              "&:hover": {
                color: "green",
              },
            }}
          >
            {" "}
            <Link to="/" className="logo__link">
              <Box sx={{ display: { xs: "none", md: "flex", height: "50px" } }}>
                <Box component="img" src="logo.png" />
              </Box>
              eat-N-fit
            </Link>
          </Typography> */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer("left", true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <SwipeableDrawer
              anchor="left"
              open={leftSideBar["left"]}
              onClose={toggleDrawer("left", false)}
              onOpen={toggleDrawer("left", true)}
            >
              {list("left")}
            </SwipeableDrawer>
          </Box>
          {/* For mobile view */}
          {/* <Link to="/" className="logo__link"> */} {/* </Link> */}
          <Link to="/" className="links logo__link">
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",

                "&:hover": {
                  color: "green",
                },
              }}
            >
              {" "}
              <Fitbit
                sx={{
                  display: { xs: "flex", md: "none" },

                  mr: 1,
                  color: "inherit",
                }}
              />
              eat-N-fit
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 10,
            }}
          >
            {pageList.map((page) => (
              <Box key={page.id}>
                {" "}
                <NavLink to={page.destination} className="links pages__link ">
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      "&:after": {
                        content: '""',
                        display: "block",
                        margin: "auto",
                        height: 5,
                        width: 0,
                        background: "transparent",
                        transition: "all 0.5s ease",
                      },
                      "&:hover:after": {
                        width: "100%",
                        background: (theme) =>
                          theme.palette.mode === "light" ? "black" : "white",
                      },
                    }}
                  >
                    {page.name}
                  </Typography>
                </NavLink>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ mr: { md: 4 } }}>
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
            {!isLoggedIn ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="User Login" arrow>
                  <IconButton sx={{ p: 0 }}>
                    <Link to="/login">
                      <Avatar sx={{ bgcolor: "green" }}>
                        <PersonPin sx={{ color: "white" }} />
                      </Avatar>
                    </Link>
                  </IconButton>
                </Tooltip>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip arrow title="Profile Settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {userResult.isLoading ? (
                      <CircularProgress />
                    ) : (
                      <Avatar
                        alt={user.firstName}
                        src="profile.jpeg"
                        sx={{ bgcolor: "orange", color: "black" }}
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  PaperProps={{
                    sx: {
                      overflow: "visible",

                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: -1,
                      },
                    },
                  }}
                >
                  <Link to={`/profile/${user._id}`} className="links">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Avatar alt={user.firstName} src="profile.jpeg" />{" "}
                      {user.firstName + " " + user.lastName}
                    </MenuItem>
                  </Link>

                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(logout());
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

//314
// {settingsList.map((setting) => (
//   <MenuItem
//     key={setting.id}
//     onClick={handleCloseUserMenu}
//     sx={{
//       ":hover": {
//         backgroundColor: "#7286d3",
//         color: "#cde990",
//       },
//     }}
//   >
//     <Typography
//       sx={{
//         mx: 3,
//         my: 1,
//         color: "inherit",
//       }}
//     >
//       {" "}
//       <NavLink
//         to={setting.destination}
//         className="links settings__link"
//       >
//         {setting.name}
//       </NavLink>
//     </Typography>

//     {/* <Typography textAlign="center">{setting.name}</Typography> */}
//   </MenuItem>
// ))}
