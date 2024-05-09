import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Container,
  Divider,
  Fab,
  IconButton,
  InputBase,
  Paper,
  Skeleton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Banner from "../components/Banner";
import {
  AccessTime,
  ArrowBackIos,
  BookmarkAdd,
  Comment,
  Delete,
  Edit,
  Favorite,
  Info,
  Search,
  Share,
} from "@mui/icons-material";
import moment from "moment";
import CommentBox from "../components/CommentBox";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import BlogGridCard from "../components/BlogGridCard";
import {
  useQueries,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { errorToast, successToast } from "../redux/slices/toastSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorAlert from "../components/ErrorAlert";

// const blog = {
//   _id: "1234579",
//   author: {
//     profilePic: "/profile.jpeg",
//     name: "John Smith",
//     username: "johnny",
//   },
//   createdAt: "2023-03-27T03:23:30.787+00:00",
//   image: "/bg.jpg",
//   title: "Best positional representation for doing setup ",
//   content:
//     "<p><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>Captain America debuted 82 years ago this month, in 1941’s “Captain America Comics” no. 1, the brainchild of Joe Simon and Jack Kirby. The sons of Jewish immigrants, born Hymie Simon and Jacob Kurtzberg, in 1939&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/www.tcj.com/the-joe-simon-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN3hIWSPJ$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>they became the first staffers</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>&nbsp;of nascent publisher Timely Comics—later Marvel—Simon the editor and writer at age 26 and Kirby the artist and art director at age 22. Their Captain America was&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/kirbymuseum.org/blogs/effect/2012/08/06/19867-kirby-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-3rhJPX$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>an instant hit</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>, selling almost a million copies a month.</em></strong></p><p><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>This embodiment of America had a square jaw, blond hair and blue eyes, but he didn’t hail from a Mayflower family or the Midwest heartland. He came from the ethnic slums of the&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=xLD7Bw-h7dk__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-La02Uc$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>Lower East Side</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>, born to poor Irish immigrants.</em></strong></p><p><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>Kirby grew up in the Jewish tenements of the neighborhood, and like&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=GsdGs6xOdWg__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN0IvCbB0$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>Steve Rogers</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>&nbsp;was a short and scrawny kid who got constantly picked on by bullies. Like&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=IZnVoPw-fHw__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN7AHrrW_$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>Rogers</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>, he always stood his ground, getting into scrapes, often at the defense of his blond younger brother, Dave. And, like&nbsp;</em></strong><a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=PQRHZmgmKuA__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCNxSHngW9$' rel='noopener noreferrer' target='_blank' style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><strong><em>Rogers</em></strong></a><strong style='color: rgb(230, 0, 0); background-color: rgb(178, 178, 0);'><em>, he developed a lifelong intolerance of bullies of any kind, his son Neal says.</em></strong></p><p>Captain America debuted 82 years ago this month, in 1941’s “Captain America Comics” no. 1, the brainchild of Joe Simon and Jack Kirby. The sons of Jewish immigrants, born Hymie Simon and Jacob Kurtzberg, in 1939&nbsp;<a href='https://urldefense.com/v3/__https:/www.tcj.com/the-joe-simon-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN3hIWSPJ$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>they became the first staffers</a>&nbsp;of nascent publisher Timely Comics—later Marvel—Simon the editor and writer at age 26 and Kirby the artist and art director at age 22. Their Captain America was&nbsp;<a href='https://urldefense.com/v3/__https:/kirbymuseum.org/blogs/effect/2012/08/06/19867-kirby-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-3rhJPX$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>an instant hit</a>, selling almost a million copies a month.</p><p>This embodiment of America had a square jaw, blond hair and blue eyes, but he didn’t hail from a Mayflower family or the Midwest heartland. He came from the ethnic slums of the&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=xLD7Bw-h7dk__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-La02Uc$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Lower East Side</a>, born to poor Irish immigrants.</p><p>Kirby grew up in the Jewish tenements of the neighborhood, and like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=GsdGs6xOdWg__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN0IvCbB0$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Steve Rogers</a>&nbsp;was a short and scrawny kid who got constantly picked on by bullies. Like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=IZnVoPw-fHw__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN7AHrrW_$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Rogers</a>, he always stood his ground, getting into scrapes, often at the defense of his blond younger brother, Dave. And, like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=PQRHZmgmKuA__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCNxSHngW9$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Rogers</a>, he developed a lifelong intolerance of bullies of any kind, his son Neal says.Captain America debuted 82 years ago this month, in 1941’s “Captain America Comics” no. 1, the brainchild of Joe Simon and Jack Kirby. The sons of Jewish immigrants, born Hymie Simon and Jacob Kurtzberg, in 1939&nbsp;<a href='https://urldefense.com/v3/__https:/www.tcj.com/the-joe-simon-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN3hIWSPJ$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>they became the first staffers</a>&nbsp;of nascent publisher Timely Comics—later Marvel—Simon the editor and writer at age 26 and Kirby the artist and art director at age 22. Their Captain America was&nbsp;<a href='https://urldefense.com/v3/__https:/kirbymuseum.org/blogs/effect/2012/08/06/19867-kirby-interview__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-3rhJPX$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>an instant hit</a>, selling almost a million copies a month.</p><p>This embodiment of America had a square jaw, blond hair and blue eyes, but he didn’t hail from a Mayflower family or the Midwest heartland. He came from the ethnic slums of the&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=xLD7Bw-h7dk__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN-La02Uc$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Lower East Side</a>, born to poor Irish immigrants.</p><p>Kirby grew up in the Jewish tenements of the neighborhood, and like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=GsdGs6xOdWg__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN0IvCbB0$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Steve Rogers</a>&nbsp;was a short and scrawny kid who got constantly picked on by bullies. Like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=IZnVoPw-fHw__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCN7AHrrW_$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Rogers</a>, he always stood his ground, getting into scrapes, often at the defense of his blond younger brother, Dave. And, like&nbsp;<a href='https://urldefense.com/v3/__https:/www.youtube.com/watch?v=PQRHZmgmKuA__;!!AQdq3sQhfUj4q8uUguY!nLmnYTH-sTMU5Uxsoa3VEcJUg92eW3Dnd7mePnpgyca4kkJQl1d3p6OdJ9kHhVlLrU6KzzQz56SRgJsCNxSHngW9$' rel='noopener noreferrer' target='_blank' style='color: var(--theme-paragraph__link-color);'>Rogers</a>, he developed a lifelong intolerance of bullies of any kind, his son Neal says.</p>",
//   description:
//     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque recusandae repellendus porro, voluptatem corporis ad fuga neque aliquam non ut, eius molestias voluptatibus ratione temporibus odio et! Eos, explicabo laborum.",
// };

const BlogDetails = () => {
  const [showComments, setShowComments] = useState(false);
  // const [likes, setLikes] = useState(0);
  const localUser = useSelector((state) => state.auth.user ?? "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const params = useParams();
  const blogId = params.blogId;

  const handleBlogDelete = async () => {
    const response = await axios.delete(`blog/${blogId}`);
    if (response.status === 200) {
      dispatch(successToast(response?.data?.message));

      navigate("/blog");
    }
    console.log(response);
  };

  // const saveBlog = async () => {
  //   const response = await axios.post(`blog-save-create/${blogId}/`);
  //   setSaves((prev) => prev++);
  //   console.log(response);
  // }

  const { mutate: likeMutate } = useMutation(
    () => axios.post(`blog/${blogId}/like`),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          queryClient.invalidateQueries({ queryKey: ["fetchBlog"] });
          console.log(data);
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          dispatch(errorToast(error?.response?.data?.message));
        } else {
          console.log(error);
          dispatch(errorToast(error?.response?.data?.message));
        }
      },
    }
  );

  const { mutate: saveMutate } = useMutation(
    () => axios.post(`blog/${blogId}/save`),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);

          queryClient.invalidateQueries({ queryKey: ["fetchBlog"] });
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          dispatch(errorToast(error?.response?.data?.message));
        } else {
          console.log(error);
          dispatch(errorToast(error?.response?.data?.message));
        }
      },
    }
  );

  const fetchBlog = async () => await axios.get(`blog/${blogId}/`);
  const fetchComments = async () => await axios.get(`comment/${blogId}`);

  const [blogResult, commentResult] = useQueries({
    queries: [
      {
        queryKey: ["fetchBlog", blogId],
        queryFn: fetchBlog,
        onSuccess: (data) => {
          if (data.status === 200) {
          }
        },
        onError: (error) => {
          dispatch(errorToast(error?.response?.data?.error));
        },
      },

      {
        queryKey: ["fetchComments", blogId],
        queryFn: fetchComments,
        onSuccess: (data) => {
          if (data.status === 200) {
            console.log(data.data);
          }
        },
        onError: (error) => {
          dispatch(errorToast(error?.response?.data?.message));
        },
      },
    ],
  });

  // const { data, isLoading, isError, error } = useQuery(blogUserId
  //   ["fetchblog", blogId],
  //   fetchBlog,
  //   {
  //     onSuccess: (data) => {
  //       if (data.status === 200) {
  //         console.log(data.data);
  //       }
  //     },
  //     onError: (error) => {
  //       dispatch(errorToast(error?.response?.data?.error));
  //     },
  //   }
  // );

  const blog = blogResult?.data?.data?.data;

  // console.log(localUser);

  const blogImageLink = `${axios.defaults.baseURL}${blog?.image}`;
  const profilePictureLink = `${axios.defaults.baseURL}${blog?.author?.profilePicture}`;

  const blogUserId = blog?.author?._id;
  const localUserId = localUser?._id;
  const comments = commentResult?.data?.data?.data;
  const likesCount = blog?.likes?.length;
  const savesCount = blog?.saves?.length;

  const fetchSameAuthorBlogs = async () =>
    await axios.get(`blog/author/${blogUserId}`);

  const authorBlogResult = useQuery({
    queryKey: ["fetchAuthorBlogs", blogId],
    queryFn: fetchSameAuthorBlogs,
    onSuccess: (data) => {
      if (data.status === 200) {
        console.log(data.data);
      }
    },
    onError: (error) => {
      dispatch(errorToast(error?.response?.data?.message));
    },
    enabled: !!blogUserId,
  });

  const authorOtherBlogs = authorBlogResult?.data?.data?.data;

  return (
    <Box>
      <Banner
        title="What is fitness?"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nam
            vitae, veniam, illum voluptates similique officia adipisci optio
            nesciunt recusandae dolorum deleniti obcaecati nulla maxime est
            aliquid assumenda. Quia, fugit?"
        button="Learn More"
        btnIcon={<Info />}
        bgImage="/bg2.jpg"
        focusText="VFC Blogs"
      />

      <Box sx={{ minHeight: "100vh" }}>
        {blogResult?.isError ? (
          <ErrorAlert message={blogResult?.error.message} />
        ) : (
          <Container sx={{ mt: 10, position: "relative" }} maxWidth="xl">
            <Box
              sx={{
                position: "absolute",
                left: -20,
                height: 100,
                display: { xs: "none", xl: "flex" },
                alignItems: "center",
              }}
            >
              <Link to="/blog" className="links">
                <ArrowBackIos sx={{ fontSize: 50 }} />
              </Link>
            </Box>
            <Paper sx={{ p: 2 }} elevation={2}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: { xs: "column", md: "row" },
                    py: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {blogResult?.isLoading ? (
                      <Skeleton
                        variant="text"
                        sx={{ width: { xs: 200, md: 300, lg: 500 } }}
                      />
                    ) : (
                      blog?.title
                    )}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf: "flex-end",
                    }}
                  >
                    {localUserId === blogUserId &&
                      (blogResult?.isLoading ? (
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: { xs: 100, md: 300, lg: 500 } }}
                        />
                      ) : (
                        <Box sx={{ alignSelf: "flex-end" }}>
                          <Link to={`/blog/edit/${blogId}`} className="links">
                            <IconButton color="success">
                              <Edit />
                            </IconButton>
                          </Link>
                          <IconButton color="error" onClick={handleBlogDelete}>
                            <Delete />
                          </IconButton>
                        </Box>
                      ))}
                    <Typography
                      variant="body1"
                      color="GrayText"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: { xs: "100%", md: 200 },
                        py: 1,
                      }}
                    >
                      {blogResult?.isLoading ? (
                        <Skeleton
                          variant="text"
                          sx={{ width: { xs: 100, md: 300, lg: 500 } }}
                        />
                      ) : (
                        <>
                          <AccessTime
                            sx={{ alignSelf: "center" }}
                            fontSize="inherit"
                          />
                          {moment(blog?.created_at).fromNow()}
                        </>
                      )}
                    </Typography>
                  </Box>
                </Box>
                <Divider sx={{ borderColor: "black" }} />

                {blogResult?.isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    sx={{ height: { xs: 200, md: 300, lg: 400 } }}
                  />
                ) : (
                  <Box
                    component="img"
                    sx={{
                      height: { xs: 300, md: 600 },
                      my: 4,
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={blogImageLink}
                    alt="blog"
                  />
                )}

                <Typography
                  variant="body1"
                  component="p"
                  sx={{ borderLeft: "2px solid gray", pl: 2, ml: 2, mb: 2 }}
                >
                  {blogResult?.isLoading ? (
                    <Skeleton
                      variant="text"
                      sx={{ width: { xs: 200, md: 300, lg: 500 } }}
                    />
                  ) : (
                    blog?.description
                  )}
                </Typography>

                {blogResult?.isLoading ? (
                  <>
                    <Skeleton
                      variant="text"
                      sx={{ width: { xs: 100, md: 300, lg: 500 } }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ width: { xs: 150, md: 350, lg: 800 } }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ width: { xs: 200, md: 400, lg: 1000 } }}
                    />
                  </>
                ) : (
                  <Typography
                    component="p"
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: blog?.content }}
                  />
                )}

                <Box
                  display="flex"
                  flexDirection={{ xs: "column", md: "row" }}
                  alignItems={{ xs: "flex-start", md: "center" }}
                  justifyContent="space-between"
                  gap={2}
                  marginTop={10}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {blogResult?.isLoading ? (
                      <Skeleton variant="circular" height={50} width={50} />
                    ) : (
                      <Avatar
                        sx={{ bgcolor: "blueviolet" }}
                        src={profilePictureLink}
                        alt={blog?.author?.firstName}
                      />
                    )}

                    {blogResult?.isLoading ? (
                      <Skeleton variant="text" width={200} />
                    ) : (
                      <Typography variant="body1">
                        {`${blog?.author?.firstName} ${blog?.author?.lastName}`}
                      </Typography>
                    )}
                  </Box>

                  {blogResult?.isLoading ? (
                    <Skeleton
                      variant="text"
                      sx={{ width: { xs: 100, md: 300, lg: 500 } }}
                    />
                  ) : (
                    <Box display="flex" gap={2}>
                      <Tooltip title="Like">
                        <Fab
                          color="primary"
                          aria-label="like"
                          size="small"
                          onClick={() => {
                            likeMutate();
                          }}
                        >
                          <Badge color="error" badgeContent={likesCount}>
                            <Favorite fontSize="medium" />
                          </Badge>
                        </Fab>
                      </Tooltip>

                      <Tooltip title="Comment">
                        <Fab
                          color="primary"
                          aria-label="comment"
                          size="small"
                          onClick={() => {
                            setShowComments((prev) => !prev);
                          }}
                        >
                          <Badge color="error" badgeContent={comments?.length}>
                            <Comment fontSize="medium" />
                          </Badge>
                        </Fab>
                      </Tooltip>

                      {/* <Tooltip title="Share">
                        <Fab color="info" aria-label="share" size="small">
                          <Badge color="error" badgeContent={100}>
                            <Share fontSize="medium" />
                          </Badge>
                        </Fab>
                      </Tooltip> */}

                      <Tooltip title="Save">
                        <Fab
                          color="primary"
                          aria-label="save"
                          size="small"
                          onClick={() => {
                            saveMutate();
                          }}
                        >
                          <Badge color="error" badgeContent={savesCount}>
                            <BookmarkAdd fontSize="medium" />
                          </Badge>
                        </Fab>
                      </Tooltip>
                    </Box>
                  )}
                </Box>

                <Collapse in={showComments} timeout={800}>
                  <Box sx={{ mt: 4 }}>
                    <Divider>
                      <Chip label="COMMENTS" />
                    </Divider>
                    <CommentBox blogId={blogId} comments={comments} />
                  </Box>
                </Collapse>
              </Box>
            </Paper>
          </Container>
        )}

        <Box sx={{ mx: 5, my: 10 }}>
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
              Other Blogs from same author
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
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <Search />
                </IconButton>
              </Paper>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "black", borderBottomWidth: 2 }} />

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
            {authorOtherBlogs?.map((blog) => (
              <BlogGridCard key={blog._id} blog={blog} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogDetails;
