import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const UserExercises = () => {
  const [openCamera, setOpenCamera] = useState(false);
  return (
    <Box>
      <Button
        variant="contained"
        color="info"
        onClick={() => {
          setOpenCamera((prev) => !prev);
        }}
      >
        Camera
      </Button>
      {openCamera && (
        <Webcam
          audio={false}
          height={720}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      )}
    </Box>
  );
};

export default UserExercises;
