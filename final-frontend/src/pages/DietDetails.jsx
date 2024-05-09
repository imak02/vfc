import React from "react";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import foods from "../data/foods";

const DietDetails = () => {
  const { dietId } = useParams();
  const getDietDetails = async () =>
    await axios({
      method: "get",
      url: `https://api.nal.usda.gov/fdc/v1/food/${dietId}`,
      params: {
        api_key: "jkqY6wlwh7grUHYF6QyAKIQURSpsYopHyMNngP4J",
      },
    });

  const location = useLocation();
  const food = location.state;

  const { isLoading, isError, data, error } = useQuery(
    ["diet"],
    getDietDetails
  );

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const foodNutrients = data?.data?.foodNutrients;

  return (
    <Container sx={{ p: 2 }}>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80vh",
          }}
        >
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Box>
      ) : (
        <Card>
          <CardMedia
            component="img"
            height="500"
            image={food.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold" }}
            >
              {data.data.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {food.description}
            </Typography>

            <Box
              sx={{
                my: 5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                textAlign="center"
                variant="h5"
                component="h5"
                sx={{ fontWeight: "bold", my: 2 }}
              >
                Nutritional Contents of {food.name}
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  my: 2,
                  width: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography>Name</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography>Amount(per 100gm)</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {foodNutrients.map((nutrient) => (
                      <TableRow>
                        <TableCell>
                          <Typography>{nutrient.nutrient.name}</Typography>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <Typography>
                            {nutrient.amount}
                            {nutrient.nutrient.unitName}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default DietDetails;
