import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import itemData from "../utils/fakeData";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ProfileListItem = (props) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </ListItem>
      <Divider />
    </>
  );
};

const Profile = () => {
  const user = useSelector((state) => state.auth.user ?? "");
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid
          item
          container
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card sx={{ my: 4, width: "95%" }}>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                my: 1,
              }}
            >
              <Link className="links" to={`/profile/edit/${user._id}`}>
                <Button size="small" variant="outlined" color="info">
                  Edit Profile
                </Button>
              </Link>
            </CardActions>

            <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="John Doe"
                src="/profile.jpeg"
                sx={{ width: 150, height: 150 }}
              />
            </CardMedia>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {user.firstName + " " + user.lastName}
              </Typography>
              <List sx={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ textAlign: "center", color: "text.secondary" }}
                >
                  Basic User Information
                </Typography>

                <ProfileListItem
                  primary="Username:"
                  secondary={user.userName}
                />
                <ProfileListItem primary="Email:" secondary={user.email} />
                <ProfileListItem primary="Phone:" secondary={user.phone} />
                <ProfileListItem primary="Gender:" secondary={user.gender} />
                <ProfileListItem primary="Role:" secondary={user.role} />
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={8}
          sx={{
            // display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <Card sx={{ my: 4 }}>
            <ImageList
              sx={{ height: 500 }}
              variant="quilted"
              cols={4}
              rowHeight={121}
            >
              {itemData.map((item) => (
                <ImageListItem
                  key={item.key}
                  cols={item.cols || 1}
                  rows={item.rows || 1}
                >
                  <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;

// <Box sx={{ textAlign: "center" }}>
//   <Avatar
//     alt={user.firstName ?? "John Doe"}
//     src="profile.jpeg"
//     sx={{ width: 150, height: 150 }}
//   />
//   <Typography component="h3" variant="h5">
//     {user.firstName ?? "John Doe"}
//   </Typography>
// </Box>

// <Typography>{user.email ?? "johndoe@gmail.com"}</Typography>
// <Typography>{user.userName ?? "johndoe"}</Typography>
