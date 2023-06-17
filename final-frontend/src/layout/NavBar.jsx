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
  styled,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, NavLink } from "react-router-dom";
import {
  DarkMode,
  Fitbit,
  Home,
  Info,
  LightMode,
  Logout,
  LunchDining,
  MenuBook,
  MonitorHeart,
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
  { name: "Home", id: "home", icon: <Home />, destination: "/" },
  { name: "About", id: "about", icon: <Info />, destination: "/about" },
  { name: "Diet", id: "diet", icon: <LunchDining />, destination: "/diet" },
  { name: "Blog", id: "blog", icon: <MenuBook />, destination: "/blog" },
];

const pagesIcons = [<InboxIcon />, <MailIcon />, <InboxIcon />];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settingsList = [
  { name: "Profile", id: "profile", destination: "/profile" },
  { name: "Account", id: "account", destination: "/profile" },
  { name: "Dashboard", id: "dashboard", destination: "/Dashboard" },
  { name: "Logout", id: "logout", destination: "/" },
];

const MyNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.mode === "light" ? "black" : "white",
  "&:after": {
    content: '""',
    display: "block",
    margin: "auto",
    height: 4,
    width: 0,
    background: "transparent",
    transition: "all 0.5s ease",
  },
  "&:hover:after, &.active:after": {
    display: "block",
    width: "100%",
    background: theme.palette.mode === "light" ? "black" : "white",
  },
}));

function NavBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [leftSideBar, setLeftSideBar] = useState({
    left: false,
  });
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

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
            <NavLink to={page.destination} className="links mobile_active">
              <ListItemButton>
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} sx={{ fontWeight: "bold" }} />
              </ListItemButton>
            </NavLink>
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

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#d7d3ff" : "black",
      }}
    >
      <Container maxWidth="false">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* For mobile view */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
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

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Link to="/" className="links logo__link">
              <Box sx={{ display: "flex" }}>
                <Box className="logo__img">
                  <Box component="img" src="/logo.png" height={30} />
                </Box>
              </Box>
            </Link>
          </Box>

          {/* Large Screen View */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
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
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  Virtual Fitness Coach
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              mr: 10,
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 10,
            }}
          >
            {pageList.map((page) => (
              <Box key={page.id}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold" }}
                >
                  <MyNavLink to={page.destination}>{page.name}</MyNavLink>
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
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
                        alt={user.first_name}
                        src={user?.profile?.profilePicture}
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
                  <Link to={`/user/${user.id}`} className="links">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Avatar alt={user.first_name} src={user?.profile?.profilePicture} />
                      {user.first_name + " " + user.last_name}
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
