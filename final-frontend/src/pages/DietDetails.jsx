import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const foodDetails = {
  name: "CHyau",
  image:
    "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1600",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit    Cupiditate ratione pariatur odit earum ab fugiat voluptatem vero    repellendus vitae explicabo, temporibus mollitia laudantium    blanditiis molestiae voluptatibus animi sapiente ad eum.",
  nutritionalValue: {
    Calories: "23gm",
    Fat: "23gm",
    Protein: "23gm",
    Carbs: "23gm",
    Fiber: "23gm",
  },
};

const DietDetails = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Paper elevation={2} sx={{ display: "flex" }}>
          <Box
            component="img"
            src={foodDetails.image}
            alt="Food"
            height={400}
            width={400}
            sx={{ border: "2px solid black", borderRadius: "3px", m: 1 }}
          />
          <Box sx={{ m: 1 }}>
            <Typography variant="h4">{foodDetails.name}</Typography>
            <Typography variant="body1">{foodDetails.description}</Typography>
            <Typography variant="h6">Nutritional Value</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Calories"
                  secondary={foodDetails.nutritionalValue.Calories}
                />
                <ListItemText
                  primary="Fat"
                  secondary={foodDetails.nutritionalValue.Fat}
                />
                <ListItemText
                  primary="Protein"
                  secondary={foodDetails.nutritionalValue.Protein}
                />
                <ListItemText
                  primary="Carbs"
                  secondary={foodDetails.nutritionalValue.Carbs}
                />
                <ListItemText
                  primary="Fiber"
                  secondary={foodDetails.nutritionalValue.Fiber}
                />
              </ListItem>
              ,
            </List>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default DietDetails;
