import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Fab, Grid, List, Paper } from "@mui/material";
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

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        mt: 50,
        bgcolor: "skyblue",
      }}
    >
      <Paper
        elevation={2}
        component="footer"
        sx={{
          pt: "500px",
          backgroundColor: "lightgreen",
          clipPath: {
            xs: "polygon(0% 40%, 100% 30%, 100% 100%, 0% 100%)",
            md: "polygon(0% 60%, 100% 30%, 100% 100%, 0% 100%)",
          },
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
              <Box>
                <SportsGymnastics />
                <Fab
                  size="large"
                  color="secondary"
                  aria-label="add"
                  variant="extended"
                >
                  <SportsGymnastics />
                  Virtual Fitness
                </Fab>
              </Box>
              <Typography paddingY={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                excepturi, distinctio totam consectetur eligendi autem,
                veritatis sequi libero voluptatem dicta natus optio et,
                assumenda inventore! At dicta assumenda vel amet?
              </Typography>
              <Box display="flex" gap={1}>
                <Fab size="small" color="secondary" aria-label="facebook">
                  <Facebook />
                </Fab>
                <Fab size="small" color="secondary" aria-label="twitter">
                  <Twitter />
                </Fab>
                <Fab size="small" color="secondary" aria-label="instagram">
                  <Instagram />
                </Fab>
                <Fab size="small" color="secondary" aria-label="youtube">
                  <YouTube />
                </Fab>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2} padding={6} display={{ xs: "none", lg: "flex" }}>
            <List>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                Services
              </Typography>

              <SingleListItem icon={<LunchDining />} primaryText="Diet Plan" />

              <SingleListItem
                icon={<RunCircleOutlined />}
                primaryText="Exercise Plan"
              />

              <SingleListItem
                icon={<SportsHandball />}
                primaryText="Posture Detection"
              />

              <SingleListItem icon={<Score />} primaryText="Monitor Progress" />
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
              />

              <SingleListItem icon={<Engineering />} primaryText="Trainers" />

              <SingleListItem
                icon={<MonitorHeart />}
                primaryText="Nutritionist"
              />

              <SingleListItem icon={<LiveHelp />} primaryText="Why Us?" />
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
              />

              <SingleListItem
                icon={<Phone />}
                primaryText="Contact"
                secondaryText="9846060606"
              />
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
