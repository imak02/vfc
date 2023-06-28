import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Avatar, Fab, Grid, List, Paper } from "@mui/material";
import {
  CorporateFare,
  Engineering,
  Facebook,
  Instagram,
  LiveHelp,
  LunchDining,
  MonitorHeart,
  Phone,
  Place,
  RunCircleOutlined,
  Score,
  SportsGymnastics,
  SportsHandball,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import SingleListItem from "../components/SingleListItem";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // mt: 50,
      }}
    >
      <Paper
        elevation={2}
        component="footer"
        sx={{
          // pt: "500px",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : "background.default",
          // clipPath: {
          //   xs: "polygon(0% 40%, 100% 30%, 100% 100%, 0% 100%)",
          //   md: "polygon(0% 60%, 100% 30%, 100% 100%, 0% 100%)",
          // },
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          // bgcolor="orange"
          // color="black"
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ padding: { xs: 2, md: 5, lg: 6 } }}
          >
            <Box>
              <Link className="links" to="/">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box component="img" src="/logo.png" height="70px" />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      "&:hover": { color: "blueviolet" },
                    }}
                  >
                    Virtual Fitness Coach
                  </Typography>
                </Box>
              </Link>
              <Typography paddingY={3}>
                Embark on a transformative fitness journey with our virtual
                fitness coach. With personalized workout plans, expert guidance,
                and a supportive community, you'll have all the tools necessary
                to achieve your fitness goals.
              </Typography>
              <Box display="flex" gap={1}>
                <Link to="https://www.facebook.com">
                  <Avatar
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    <Facebook />
                  </Avatar>
                </Link>
                <Link to="https://www.twitter.com">
                  <Avatar
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    <Twitter />
                  </Avatar>
                </Link>
                <Link to="https://www.instagram.com">
                  <Avatar
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    <Instagram />
                  </Avatar>
                </Link>
                <Link to="https://www.youtube.com">
                  <Avatar
                    sx={{
                      bgcolor: (theme) =>
                        theme.palette.mode === "light" ? "black" : "white",
                    }}
                  >
                    <YouTube />
                  </Avatar>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} padding={6} display={{ xs: "none", lg: "flex" }}>
            <List>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Services
              </Typography>

              <SingleListItem
                icon={<LunchDining />}
                primaryText="Diet Plan"
                to="/diet"
              />

              <SingleListItem
                icon={<RunCircleOutlined />}
                primaryText="Exercise Plan"
                to="/"
              />

              <SingleListItem
                icon={<SportsHandball />}
                primaryText="Posture Detection"
                to="/"
              />

              <SingleListItem
                icon={<Score />}
                primaryText="Monitor Progress"
                to="/"
              />
            </List>
          </Grid>
          <Grid item md={2} padding={6} display={{ xs: "none", lg: "flex" }}>
            <List>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                About Us
              </Typography>

              <SingleListItem
                icon={<CorporateFare />}
                primaryText="Organization"
                to="/"
              />

              <SingleListItem
                icon={<Engineering />}
                primaryText="Trainers"
                to="/"
              />

              <SingleListItem
                icon={<MonitorHeart />}
                primaryText="Nutritionist"
                to="/"
              />

              <SingleListItem
                icon={<LiveHelp />}
                primaryText="Why Us?"
                to="/"
              />
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={3}
            sx={{ padding: { xs: 2, md: 5, lg: 6 } }}
          >
            <List>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Contact Info
              </Typography>

              <SingleListItem
                icon={<Place />}
                primaryText="Location"
                secondaryText="Kathmandu,Nepal"
                to="/"
              />

              <SingleListItem
                icon={<Phone />}
                primaryText="Contact"
                secondaryText="9846060606"
                to="/"
              />
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
