import { ManageAccounts } from "@mui/icons-material";
import {
  Avatar,
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
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

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
  const user = useSelector((state) => state.auth.user ?? "");
  const profilePictureLink = `${axios.defaults.baseURL}${user?.profilePicture}`;

  const params = useParams();
  const userId = params.id;
  const birthday = new Date(user?.dob).toDateString();
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
          }}
        >
          {/* <Box
            sx={{ borderRadius: 2 }}
            component="img"
            src={user?.profile?.profilePicture}
            alt="Profile"
            height="100%"
            width="100%"
          /> */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Avatar
              sx={{ bgcolor: "blueviolet", width: 400, height: 400 }}
              alt={user?.firstName}
              src={profilePictureLink}
            />
          </Box>
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
                {user?.firstName + " " + user?.lastName}
              </Typography>
              <Typography
                color="GrayText"
                variant="h6"
                component="h6"
                sx={{ fontWeight: "bold" }}
              >
                @{user?.username}
              </Typography>
            </Box>

            <Link className="links" to={`/user/${userId}/edit-profile`}>
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
            <InfoBox name="Gender" value={user?.gender} />
            <InfoBox name="Birthday" value={birthday} />
            {/* <InfoBox name="Role" value={user?.category} */}
          </Box>

          <Box sx={{ border: "1px solid black", borderRadius: 2, p: 1, my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Contact info
            </Typography>
            <InfoBox name="Phone" value={user?.phone} />
            <InfoBox name="Email" value={user?.email} />
          </Box>

          <Box sx={{ border: "1px solid black", borderRadius: 2, p: 1, my: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Address info
            </Typography>
            <InfoBox name="Country" value={user?.country} />
            <InfoBox name="City" value={user?.address} />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
