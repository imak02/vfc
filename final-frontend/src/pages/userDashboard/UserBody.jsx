import React from "react";
import { Box, Divider, Paper, Tooltip, Typography } from "@mui/material";
import { DriveFileRenameOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const UserBody = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", color: "blueviolet", mb: 2 }}
        >
          My Body
        </Typography>

        <Link to="/user/:id/edit-body" className="links">
          <Tooltip title="Edit Details">
            <DriveFileRenameOutline
              fontSize="large"
              sx={{ color: "blueviolet" }}
            />
          </Tooltip>
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: { lg: 5 },
        }}
      >
        <Box sx={{ flex: 2 }}>
          <Paper sx={{ mb: 2 }} elevation={3}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Height
                  </Typography>
                  <Typography variant="h4" component="h3">
                    185
                    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                      cm
                    </Typography>
                  </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Weight
                  </Typography>
                  <Typography variant="h4" component="h3">
                    90
                    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                      kg
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Divider />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Blood Group
                  </Typography>
                  <Typography variant="h4" component="h3">
                    A
                    <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                      +
                    </Typography>
                  </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Body Type
                  </Typography>
                  <Typography variant="h4" component="h3">
                    Ectomorph
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: "bold" }}
                    ></Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ my: 2, p: 2 }} elevation={3}>
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", color: "blueviolet" }}
            >
              Additional Details
            </Typography>
            <Divider sx={{ borderBottomWidth: 2, my: 2 }} />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                my: 2,
              }}
            >
              <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
                Blood Pressure
              </Typography>
              <Typography>120/80 mmHg</Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                my: 2,
              }}
            >
              <Typography variant="h6" component="h6" fontWeight="bold">
                Blood Sugar
              </Typography>
              <Typography>80 mg/dl</Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                my: 2,
              }}
            >
              <Typography variant="h6" component="h6" fontWeight="bold">
                Food Preference
              </Typography>
              <Typography>Vegan</Typography>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                my: 2,
              }}
            >
              <Typography variant="h6" component="h6" fontWeight="bold">
                Body Abnormalities
              </Typography>
              <Typography>None</Typography>
            </Box>
          </Paper>
        </Box>

        <Paper sx={{ flex: 3, p: 2 }} elevation={3}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ fontWeight: "bold", color: "blueviolet" }}
          >
            Medical History
          </Typography>
          <Divider sx={{ borderBottomWidth: 2, my: 2 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",

              my: 2,
            }}
          >
            <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
              Diseases
            </Typography>
            <Box>
              <Typography>Tuberculosis</Typography>
              <Typography>Asthma</Typography>
              <Typography>Lung Cancer</Typography>
              <Typography>Diabetes</Typography>
              <Typography>Pneumonia</Typography>
              <Typography>All other diseases</Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",

              my: 2,
            }}
          >
            <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
              Allergies
            </Typography>
            <Box>
              <Typography>Tuberculosis</Typography>
              <Typography>Asthma</Typography>
              <Typography>Lung Cancer</Typography>
              <Typography>Diabetes</Typography>
              <Typography>Pneumonia</Typography>
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",

              my: 2,
            }}
          >
            <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
              Injuries
            </Typography>
            <Box>
              <Typography>Tuberculosis</Typography>
              <Typography>Asthma</Typography>
              <Typography>Lung Cancer</Typography>
              <Typography>Diabetes</Typography>
              <Typography>Pneumonia</Typography>
              <Typography>All other diseases</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default UserBody;
