import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { poseImages } from "../utils/pose_images";
import { TextField, Typography } from "@mui/material";

export default function Dropdown({ poseList, currentPose, setCurrentPose }) {
  const [pose, setPose] = React.useState("Tree");

  const handleChange = (event) => {
    setPose(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: "100%" }}>
      <Box>
        <Typography variant="h6" component="h2">
          Select a Pose
        </Typography>
        <TextField
          id="category"
          name="category"
          select
          fullWidth
          value={pose}
          onChange={handleChange}
          SelectProps={{
            displayEmpty: true,
            renderValue: (value) => (value ? value : "Select a Pose"),
          }}
        >
          {poseList.map((pose, index) => (
            <MenuItem
              key={index}
              value={pose}
              onClick={() => setCurrentPose(pose)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography>{pose}</Typography>
                <Box
                  component="img"
                  src={poseImages[pose]}
                  className="dropdown-img"
                  height={50}
                  width={50}
                />
              </Box>
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Box>
  );
}
