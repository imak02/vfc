import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { ArrowBack, Call, Mail, Person, Place } from "@mui/icons-material";
import MyLinearProgress from "../../components/MyLinearProgress";

const UserDetails = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <ArrowBack />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src="/profile.jpeg"
            alt="Asbin Khanal"
            sx={{ width: 150, height: 150 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h6" component="h5">
                Asbin Khanal
              </Typography>
              <Typography variant="body1" component="p">
                @imak02
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "GrayText",
                }}
              >
                <Person fontSize="inherit" />
                <Typography variant="body1" component="p">
                  Male -23 years
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "GrayText",
                }}
              >
                <Call fontSize="inherit" />
                <Typography variant="body1" component="p">
                  9846636184
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "GrayText",
                }}
              >
                <Mail fontSize="inherit" />
                <Typography variant="body1" component="p">
                  asbin@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "GrayText",
                }}
              >
                <Place fontSize="inherit" />
                <Typography variant="body1" component="p">
                  Kathmandu, Nepal
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                182cm
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Height
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                77kg
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Weight
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                A+
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Blood Group
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center", flex: 1 }}>
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                Ectomorph
              </Typography>
              <Typography variant="body1" component="p" color="blueviolet">
                Body Type
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              my: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
                color="blueviolet"
              >
                Goal:
              </Typography>
              <Typography
                variant="h6"
                component="h5"
                sx={{ fontWeight: "bold" }}
              >
                Weight Loss
              </Typography>
            </Box>
            <Box sx={{ width: "80%" }}>
              <MyLinearProgress value={80} color="blueviolet" height={20} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserDetails;
