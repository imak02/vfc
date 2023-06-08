import { Delete, Edit, Search } from "@mui/icons-material";
import {
  Box,
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
import React from "react";
import BlogGridCard from "../../components/BlogGridCard";

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

const SearchBar = ({ title }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", flex: 5 }}
        >
          {title}
        </Typography>
        <Box sx={{ flex: 1, display: { xs: "none", lg: "flex" } }}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "50px",
              width: "100%",
              mx: 2,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Blogs"
              inputProps={{ "aria-label": "search blogs" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <Search />
            </IconButton>
          </Paper>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />
    </Box>
  );
};

const UserBlogs = () => {
  return (
    <Box>
      <Paper sx={{ p: 2, mb: 2 }} elevation={2}>
        <SearchBar title="My Blogs" />
        <Box sx={{ my: 5 }}>
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