import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import UserSideBar from "./UserSideBar";

const UserProfileLayout = () => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: { xs: "column", md: "row" },
    //     p: 5,
    //     minHeight: "100vh",
    //   }}
    // >
    //   <Box sx={{ flex: 1 }}>
    //     <UserSideBar />
    //   </Box>
    //   <Box sx={{ flex: 4 }}>
    //     <Outlet />
    //   </Box>
    // </Box>

    <Grid
      container
      spacing={3}
      justifyContent="center"
      sx={{ padding: { xs: 1, lg: 3 } }}
    >
      <Grid item xs={12} sm={9} md={4} lg={3} xl={2.5}>
        <UserSideBar />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={9} xl={9.5}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default UserProfileLayout;
