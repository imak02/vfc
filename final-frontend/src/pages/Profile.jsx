import { ManageAccounts } from "@mui/icons-material";
import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ name, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        my: 1,
        whiteSpace: "pre-line",
      }}
    >
      <Typography
        variant="h6"
        color="GrayText"
        sx={{ fontWeight: "bold", width: { xs: 40, md: 100 } }}
      >
        {name}
      </Typography>
      <Typography variant="h6" sx={{ wordBreak: "break-word" }}>
        {value}
      </Typography>
    </Box>
  );
};

const Profile = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", color: "blueviolet", mb: 2 }}
      >
        My Profile
      </Typography>

      <Paper
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { lg: 5 },
          p: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            mb: { xs: 3, md: 2 },
            objectFit: "cover",
          }}
        >
          <Box
            sx={{ borderRadius: 2 }}
            component="img"
            src="https://wallpaperaccess.com/full/1136918.jpg"
            alt="Profile"
            height="100%"
            width="100%"
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontWeight: "bold", color: "blueviolet" }}
              >
                Shraddha Kapoor
              </Typography>
              <Typography
                color="GrayText"
                variant="h6"
                component="h6"
                sx={{ fontWeight: "bold" }}
              >
                @skapoor
              </Typography>
            </Box>

            <Link className="links" to="/user/123/edit-profile">
              <Tooltip title="Edit Profile">
                <ManageAccounts fontSize="large" sx={{ color: "blueviolet" }} />
              </Tooltip>
            </Link>
          </Box>
          <Divider sx={{ borderBottomWidth: 2, my: 1 }} />

          <Box sx={{ border: "1px solid black", borderRadius: 2, p: 1, my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Basic info
            </Typography>
            <InfoBox name="Gender" value="Female" />
            <InfoBox name="Birthday" value="19 May 1995" />
            <InfoBox name="Role" value="User" />
          </Box>

          <Box sx={{ border: "1px solid black", borderRadius: 2, p: 1, my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Contact info
            </Typography>
            <InfoBox name="Phone" value="9846636184" />
            <InfoBox name="Email" value="shraddha.kapoor@gmail.com" />
          </Box>

          <Box sx={{ border: "1px solid black", borderRadius: 2, p: 1, my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Address info
            </Typography>
            <InfoBox name="Country" value="India" />
            <InfoBox name="City" value="Mumbai, Maharashtra" />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
