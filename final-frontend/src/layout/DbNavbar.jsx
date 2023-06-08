import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ExitToApp, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const DbNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ displa: "flex", justifyContent: "space-between" }}>
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
                    display: { xs: "none", sm: "flex" },
                    color: "text.primary",
                  }}
                >
                  Virtual Fitness Coach
                </Typography>
              </Box>
            </Link>
          </Box>

          <Tooltip title="Signout">
            <IconButton edge="start" color="inherit" aria-label="signout">
              <Logout fontSize="large" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DbNavbar;
