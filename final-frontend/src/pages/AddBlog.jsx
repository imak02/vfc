import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Card,
  CardMedia,
  Container,
  Fab,
  Input,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { AddPhotoAlternate } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import {
  errorToast,
  loadingToast,
  successToast,
} from "../redux/slices/toastSlice";
import { login } from "../redux/slices/authSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./AddBlog.scss";

const FILE_SIZE = 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const validationSchema = Yup.object({
  title: Yup.string("Enter the title of your blog")
    .min(2, "Title must be at least 2 characters")
    .required("Title is required"),
  description: Yup.string("Enter a short descriptive paragraph").required(
    "Description is required"
  ),
  content: Yup.string("Enter a short descriptive paragraph").required(
    "Content is required"
  ),
  image: Yup.mixed()
    .required("Image is required"),
    // .test(
    //   "fileSize",
    //   "File size is limited to 1 Mb",
    //   (value) => value && value.size <= FILE_SIZE
    // )
    // .test(
    //   "fileFormat",
    //   "Unsupported Format",
    //   (value) => value && SUPPORTED_FORMATS.includes(value.type)
    // ),
  category: Yup.string("Select a category").required(
    "Please select a category"
  ),
});

export default function AddBlog() {
  const [image, setImage] = useState(null);

  const [focus, setFocus] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  var toolbarOptions = [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "blockquote"],
    [{ align: ["", "center", "justify"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["clean"],
  ];

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
    if (!formik.touched.content) {
      formik.setFieldTouched("content", true);
    }
  };

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("add-blog/", values),
    {
      onMutate: () => {
        dispatch(loadingToast("Posting..."));
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data);
          dispatch(successToast(data?.data?.message));
          navigate("/blog");
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

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      content: "",
      image: "",
      category: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.set("title", values.title);
      formData.set("description", values.description);
      formData.set("content", values.content);
      formData.set("image", values.image);
      formData.set("category", values.category);

      mutate(formData, {
        onSuccess: () => {
          resetForm();
        },
      });
    },
  });

  return (
    // <Paper elevation={24}>
    <Box
      sx={{
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[300]
            : t.palette.grey[700],
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          component="main"
          sx={{
            // height: "90vh",
            paddingY: { md: 10 },
          }}
        >
          <Grid
            item
            xs={false}
            sm={false}
            lg={6}
            sx={{
              backgroundImage: (t) =>
                t.palette.mode === "light"
                  ? "url(https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
                  : "url(https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "start",
            }}
          />
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            component={Paper}
            elevation={0}
            square
            sx={{ my: { xs: 2, md: 0 }, height: "100%" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Create a new blog
              </Typography>

              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1, width: "100%" }}
              >
                <Box
                  sx={{
                    marginBottom: 2,
                    marginRight: { md: "1%" },
                    width: { xs: "100%", md: "69%" },
                    display: "inline-block",
                  }}
                >
                  <Typography variant="h6" component="h2">
                    Title
                  </Typography>
                  <TextField
                    id="title"
                    name="title"
                    type="text"
                    multiline
                    rows={2}
                    placeholder="Title of the blog"
                    fullWidth
                    value={formik.values.title}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                  />
                </Box>

                <Box
                  sx={{
                    marginBottom: 2,
                    marginLeft: { md: "1%" },
                    width: { xs: "100%", md: "29%" },
                    display: "inline-block",
                  }}
                >
                  <Typography variant="h6" component="h2">
                    Category
                  </Typography>
                  <TextField
                    id="category"
                    name="category"
                    select
                    fullWidth
                    value={formik.values.category}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.category && Boolean(formik.errors.category)
                    }
                    helperText={
                      formik.touched.category && formik.errors.category
                    }
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: (value) =>
                        value ? value.toUpperCase() : "Select a Category",
                    }}
                  >
                    {["Diet", "Exercise", "Health"].map((categoryOption) => (
                      <MenuItem
                        key={categoryOption}
                        value={categoryOption.toLowerCase()}
                      >
                        {categoryOption}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box sx={{ marginBottom: 2 }}>
                  <Typography variant="h6" component="h2">
                    Short Description
                  </Typography>
                  <TextField
                    fullWidth
                    id="description"
                    name="description"
                    color="focusInput"
                    autoComplete="off"
                    multiline
                    rows={4}
                    placeholder="Short description of the blog"
                    value={formik.values.description}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.description &&
                      Boolean(formik.errors.description)
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                  />
                </Box>

                <Box>
                  <Typography variant="h6" component="h2">
                    Blog Content
                  </Typography>
                  <ReactQuill
                    theme="snow"
                    modules={{
                      toolbar: {
                        container: toolbarOptions,
                      },
                    }}
                    name="content"
                    placeholder="Enter your blog content here..."
                    value={formik.values.content}
                    onChange={(e) => formik.setFieldValue("content", e)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />

                  {formik.touched.content && formik.errors.content && (
                    <Typography
                      color="error"
                      variant="body2"
                      component="p"
                      sx={{ marginY: 2, ml: 2, fontSize: 12 }}
                    >
                      {formik.errors.content}
                    </Typography>
                  )}
                </Box>

                <Fab
                  color="info"
                  aria-label="add"
                  variant="extended"
                  component="label"
                  sx={{ my: 2 }}
                >
                  <AddPhotoAlternate sx={{ mr: 1 }} />
                  {image ? "Change" : "Upload"} Image
                  <Input
                    fullWidth
                    id="image"
                    name="image"
                    type="file"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "image",
                        event.currentTarget.files[0]
                      );
                      setImage(URL.createObjectURL(event.target.files[0]));
                    }}
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    sx={{ mb: 2, display: "none" }}
                  />
                </Fab>

                {formik.touched.image && formik.errors.image && (
                  <Typography
                    color="error"
                    variant="body2"
                    component="p"
                    sx={{ mb: 2, ml: 2, fontSize: 12 }}
                  >
                    {formik.errors.image}
                  </Typography>
                )}

                {image && (
                  <Card
                    sx={{
                      maxWidth: { xs: 350, md: 500 },
                      mb: 2,
                      alignSelf: "center",
                    }}
                  >
                    <CardMedia component="img" src={image} title="Uploads" />
                  </Card>
                )}

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-end",
                    mt: 2,
                  }}
                >
                  <Button
                    type="reset"
                    color="error"
                    variant="contained"
                    onClick={() => {
                      formik.resetForm();
                      setImage(null);
                    }}
                  >
                    Clear
                  </Button>

                  <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    disabled={isLoading}
                  >
                    {isLoading ? "Posting..." : "Post"}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    // </Paper>
  );
}
