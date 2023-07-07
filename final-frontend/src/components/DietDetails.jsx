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
  const SingleItem = ({ value }) => {
    return (
      <ListItem sx={{ display: "list-item" }}>
        <ListItemText primary={value} />
      </ListItem>
    );
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" component="h6">
          Nutritional Values (g):
        </Typography>
        <Box>
          <List
            sx={{ listStyleType: "disc", pl: 6 }}
            dense={true}
            disablePadding
          >
            <SingleItem value={`Calories: ${diet.Calories}`} />
            <SingleItem value={`Fat Content: ${diet.FatContent}`} />
            <SingleItem
              value={`Saturated Fat Content: ${diet.SaturatedFatContent}`}
            />
            <SingleItem
              value={`Cholesterol Content: ${diet.CholesterolContent}`}
            />
            <SingleItem value={`Sodium Content: ${diet.SodiumContent}`} />
            <SingleItem
              value={`Carbohydrate Content: ${diet.CarbohydrateContent}`}
            />
            <SingleItem value={`Fiber Content: ${diet.FiberContent}`} />
            <SingleItem value={`Sugar Content: ${diet.SugarContent}`} />
            <SingleItem value={`Protein Content: ${diet.ProteinContent}`} />
          </List>
        </Box>
      </Box>
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
              <SingleItem value={ingredient} />
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
              <SingleItem value={recipe} />
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
            <SingleItem value={`Cook Time: ${diet.CookTime} min`} />
            <SingleItem value={`Preparation Time: ${diet.PrepTime} min`} />
            <SingleItem value={`Total Time: ${diet.TotalTime} min`} />
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default DietDetails;
