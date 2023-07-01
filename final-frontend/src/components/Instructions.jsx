import { useState } from "react";

import { poseInstructions } from "../utils/data";

import { Box, List, ListItem, Typography } from "@mui/material";

export default function Instructions({ currentPose }) {
  const [instructions, setInstructions] = useState(poseInstructions);

  return (
    <Box>
      <Typography variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
        Instructions:
      </Typography>
      <List>
        {instructions[currentPose].map((instruction, index) => {
          return (
            <ListItem key={index} sx={{ listStyle: "inherit" }}>
              {instruction}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
