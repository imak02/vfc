import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const DietDetails = ({ diet }) => {
  return (
    <Box>
      <Box>
        <Typography variant="h6" component="h6">
          Ingredients
        </Typography>
        <Box>
          {diet?.RecipeIngredientParts.map((ingredient, index) => (
            <List
              dense={true}
              key={index}
              disablePadding
              sx={{ listStyleType: "disc", pl: 6 }}
            >
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary={ingredient} />
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" component="h6">
          Recepie Instructions:
        </Typography>
        <Box>
          {diet?.RecipeInstructions.map((recipe, index) => (
            <List
              dense={true}
              key={index}
              disablePadding
              sx={{ listStyleType: "disc", pl: 6 }}
            >
              <ListItem sx={{ display: "list-item" }}>
                <ListItemText primary={recipe} />
              </ListItem>
            </List>
          ))}
        </Box>
      </Box>

      <Box>
        <Typography variant="h6" component="h6">
          Cooking and Preparation Time:
        </Typography>
        <Box>
          <List
            sx={{ listStyleType: "disc", pl: 6 }}
            dense={true}
            disablePadding
          >
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary={`Cook Time: ${diet.CookTime} min`} />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={`Preparation Time: ${diet.PrepTime} min`}
              />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary={`Total Time: ${diet.TotalTime} min`} />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default DietDetails;
