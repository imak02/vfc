import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SingleListItem = ({ icon, primaryText, secondaryText, to }) => {
  return (
    <Link className="links" to={to}>
      <ListItem sx={{ color: "inherit", "&:hover": { color: "blueviolet" } }}>
        <ListItemIcon
          sx={{ color: "inherit", "&:hover": { color: "blueviolet" } }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={primaryText} secondary={secondaryText} />
      </ListItem>
    </Link>
  );
};

export default SingleListItem;
