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
import { useQueries, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { errorToast, successToast } from "../../redux/slices/toastSlice";
import moment from "moment";

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
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user ?? "");
  const userId = user?._id;

  const queryClient = useQueryClient();

  const getCurrentUserBlogs = async () =>
    await axios.get(`blog/author/${userId}`);
  const getCurrentUserLikedBlogs = async () => await axios.get("blog/liked");
  const getCurrentUserSavedBlogs = async () => await axios.get("blog/saved");

  const [userBlogsResult, userLikedBlogsResult, userSavedBlogsResult] =
    useQueries({
      queries: [
        {
          queryKey: ["currentUserBlogs"],
          queryFn: getCurrentUserBlogs,
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
            dispatch(errorToast(error?.response?.data?.message));
          },
          enabled: !!userId,
        },
        {
          queryKey: ["currentUserLikedBlogs"],
          queryFn: getCurrentUserLikedBlogs,
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
            dispatch(errorToast(error?.response?.data?.message));
          },
        },
        {
          queryKey: ["currentUserSavedBlogs"],
          queryFn: getCurrentUserSavedBlogs,
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.log(error);
            dispatch(errorToast(error?.response?.data?.message));
          },
        },
      ],
    });

  // const userBlogsResult = useQuery({
  //   queryKey: ["currentUserBlogs"],
  //   queryFn: getCurrentUserBlogs,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log(error);
  //     dispatch(errorToast(error?.response?.data?.message));
  //   },
  // });

  const userBlogs = userBlogsResult?.data?.data?.data;
  const userLikedBlogs = userLikedBlogsResult?.data?.data?.data;
  const userSavedBlogs = userSavedBlogsResult?.data?.data?.data;

  const handleBlogDelete = async (blogId) => {
    const response = await axios.delete(`blog/${blogId}`);
    if (response.status === 200) {
      dispatch(successToast(response?.data?.message));
      queryClient.invalidateQueries("currentUserBlogs");
    }
    console.log(response);
  };

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
                {userBlogs?.map((blog) => (
                  <TableRow key={blog?._id}>
                    <TableCell component="td" scope="row">
                      <Box
                        component="img"
                        height={100}
                        width={100}
                        alt="blog"
                        src={`${axios.defaults.baseURL}${blog?.image}`}
                      />
                    </TableCell>
                    <TableCell sx={{ maxWidth: 500 }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {blog?.title}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {moment(new Date(blog?.updatedAt)).fromNow()}
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Link to={`/blog/edit/${blog?._id}`} className="links">
                          <Tooltip title="Edit">
                            <IconButton>
                              <Edit color="info" />
                            </IconButton>
                          </Tooltip>
                        </Link>
                        <Tooltip title="Delete">
                          <IconButton
                            onClick={() => {
                              handleBlogDelete(blog?._id);
                            }}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
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
          {userLikedBlogs?.map((blog) => (
            <BlogGridCard key={blog?._id} blog={blog} />
          ))}
        </Box>
      </Paper>
      <Paper sx={{ p: 2, my: 2 }} elevation={2}>
        <SearchBar title="Saved Blogs" />
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
          {userSavedBlogs?.map((blog) => (
            <BlogGridCard key={blog?.id} blog={blog} />
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default UserBlogs;
