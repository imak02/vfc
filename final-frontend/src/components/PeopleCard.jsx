import { Call, Favorite } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";

const PeopleCard = () => {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <CardMedia
          component="img"
          height={200}
          image="https://images.pexels.com/photos/8852029/pexels-photo-8852029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="blog"
        />
        <Typography
          variant="h5"
          component="h3"
          sx={{ fontWeight: "bold", textAlign: "center", my: 2 }}
        >
          Manita Kunwor
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            color="GrayText"
            sx={{ textAlign: "center" }}
          >
            Dietician
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Tooltip title="Like">
              <Fab color="info" aria-label="like" size="small">
                <Badge color="error" badgeContent={9}>
                  <Favorite fontSize="medium" />
                </Badge>
              </Fab>
            </Tooltip>
            <Tooltip title="Call">
              <Fab color="success" aria-label="call" size="small">
                <Call fontSize="medium" />
              </Fab>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PeopleCard;
