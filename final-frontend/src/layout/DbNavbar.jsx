import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkMode, ExitToApp, LightMode, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Fab, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../redux/slices/themeSlice";

const DbNavbar = () => {
  const themeMode = useSelector((state) => state.themeMode.value);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              {mobileOpen ? <Close /> : <Menu />}
            </IconButton>
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
                    display: { xs: "none", sm: "flex" },
                    color: "text.primary",
                  }}
                >
                  Virtual Fitness Coach
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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

            <Tooltip title="Signout">
              <IconButton edge="start" color="inherit" aria-label="signout">
                <Logout fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default DbNavbar;
