import React from "react";
import { Box, Divider, Paper, Tooltip, Typography } from "@mui/material";
import { DriveFileRenameOutline } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserBody = () => {
  const params = useParams();
  const userId = params.id;

  const getCurrentUserBody = async () =>
    await axios.get(`get-body-details/${userId}/`);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userBody"],
    queryFn: getCurrentUserBody,
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200) {
        console.log(data.data);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const userBody = data?.data?.payload;
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

        <Link to={`/user/${userId}/edit-body`} className="links">
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
        <Box
          sx={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
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
                  {/* {userBody?.height && ( */}
                  <Typography variant="h4" component="h3">
                    {userBody?.height ? `${userBody?.height} cm` : "... "}
                    {/* <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                      cm
                    </Typography> */}
                  </Typography>
                  {/* )} */}
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Weight
                  </Typography>
                  {/* {userBody?.height && ( */}
                  <Typography variant="h4" component="h3">
                    {userBody?.weight ? `${userBody?.weight} kg` : "..."}
                    {/* <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                      kg
                    </Typography> */}
                  </Typography>
                  {/* )} */}
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
                    {userBody?.blood_group ? userBody.blood_group : "..."}
                  </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="h3" color="blueviolet">
                    Body Type
                  </Typography>
                  <Typography variant="h4" component="h3">
                    {userBody?.body_type ? userBody?.body_type : "..."}
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: "bold" }}
                    ></Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>

          <Paper sx={{ p: 2 }} elevation={3}>
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
              <Typography>
                {userBody?.blood_pressure
                  ? `${userBody?.blood_pressure} mmHg`
                  : null}
              </Typography>
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
              <Typography>
                {userBody?.blood_sugar
                  ? `${userBody?.blood_sugar} mg/dl`
                  : null}
              </Typography>
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
              <Typography>{userBody?.food_preference}</Typography>
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
              <Box>
                {userBody?.abnormalities?.map((abnormality) => (
                  <Typography>{abnormality}</Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>

        <Paper sx={{ flex: 3, p: 2, my: { xs: 2, lg: 0 } }} elevation={3}>
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
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",

                // justifyContent: "space-around",

                my: 2,
              }}
            >
              <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
                Diseases
              </Typography>
              <Box>
                {userBody?.diseases?.map((disease) => (
                  <Typography>{disease}</Typography>
                ))}
              </Box>
            </Box>
            <Divider />
            <Box
              sx={{
                flex: 1,

                display: "flex",
                alignItems: "center",

                // justifyContent: "space-around",
                my: 2,
              }}
            >
              <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
                Allergies
              </Typography>
              <Box>
                {userBody?.allergies?.map((allergy) => (
                  <Typography>{allergy}</Typography>
                ))}
              </Box>
            </Box>
            <Divider />

            <Box
              sx={{
                flex: 1,

                display: "flex",
                alignItems: "center",

                // justifyContent: "space-around",

                my: 2,
              }}
            >
              <Typography sx={{}} variant="h6" component="h6" fontWeight="bold">
                Injuries
              </Typography>
              <Box>
                {userBody?.injuries?.map((injury) => (
                  <Typography>{injury}</Typography>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default UserBody;
