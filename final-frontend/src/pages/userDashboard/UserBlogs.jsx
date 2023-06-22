import { Delete, Edit, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import BlogGridCard from "../../components/BlogGridCard";
import SearchBar from "../../components/SearchBar";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const UserBlogs = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
        <SearchBar title="My Blogs" />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Link to="/create-blog" className="links">
            <Button variant="contained" color="info" sx={{ px: 4, py: 1 }}>
              Create a new blog
            </Button>
          </Link>
        </Box>
        <Box sx={{ my: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="blogs table">
              <TableHead>
                <TableRow>
                  <TableCell>Photo</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Last Modified</TableCell>
                  <TableCell>Modify</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="td" scope="row">
                    <Box
                      component="img"
                      height={100}
                      width={100}
                      alt="blog"
                      src="/foodPoster.jpg"
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 500 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      The posture state to follow for errorless training The
                      posture state to follow for errorless training posture
                      state to follow for errorless training
                    </Typography>
                  </TableCell>
                  <TableCell>1 month ago</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="td" scope="row">
                    <Box
                      component="img"
                      height={100}
                      width={100}
                      alt="blog"
                      src="/foodPoster.jpg"
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 500 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      The posture state to follow for errorless training The
                      posture state to follow for errorless training posture
                      state to follow for errorless training
                    </Typography>
                  </TableCell>
                  <TableCell>1 month ago</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell component="td" scope="row">
                    <Box
                      component="img"
                      height={100}
                      width={100}
                      alt="blog"
                      src="/foodPoster.jpg"
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 500 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      The posture state to follow for errorless training The
                      posture state to follow for errorless training posture
                      state to follow for errorless training
                    </Typography>
                  </TableCell>
                  <TableCell>1 month ago</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>{" "}
                <TableRow>
                  <TableCell component="td" scope="row">
                    <Box
                      component="img"
                      height={100}
                      width={100}
                      alt="blog"
                      src="/foodPoster.jpg"
                    />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 500 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      The posture state to follow for errorless training The
                      posture state to follow for errorless training posture
                      state to follow for errorless training
                    </Typography>
                  </TableCell>
                  <TableCell>1 month ago</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Tooltip title="Edit">
                        <IconButton>
                          <Edit color="info" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton>
                          <Delete color="error" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }} elevation={2}>
        <SearchBar title="Liked Blogs" />
        <Box
          sx={{
            my: 5,
            gap: 10,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BlogGridCard />
          <BlogGridCard />
          <BlogGridCard />
          <BlogGridCard />
          <BlogGridCard />
        </Box>
      </Paper>
    </Box>
  );
};

export default UserBlogs;
