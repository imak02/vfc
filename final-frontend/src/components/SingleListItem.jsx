import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

const SingleListItem = ({ icon, primaryText, secondaryText }) => {
  return (
    <ListItem>
      <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default SingleListItem;
