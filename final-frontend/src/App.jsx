import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Diet from "./pages/Diet";
import Blog from "./pages/Blog";
import Template from "./pages/Template";
import Example from "./pages/Example";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import DietDetails from "./pages/DietDetails";
import ResetPassword from "./pages/ResetPassword";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import UserProfileLayout from "./layout/UserProfileLayout";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import Profile from "./pages/userDashboard/Profile";
import EditProfile from "./pages/userDashboard/EditProfile";
import UserBody from "./pages/userDashboard/UserBody";
import UserBlogs from "./pages/userDashboard/UserBlogs";
import UserDiet from "./pages/userDashboard/UserDiet";
import UserExercises from "./pages/userDashboard/UserExercises";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/diet",
        element: <Diet />,
      },
      {
        path: "/diet/:dietId",
        element: <DietDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "/blog/edit/:blogId",
        element: <EditBlog />,
      },
      {
        path: "/create-blog",
        element: <AddBlog />,
      },
      {
        path: "/profile/:id",
        element: (
          //  <ProtectedRoute>
          <Profile />
          // </ProtectedRoute>
        ),
      },

      // {
      //   path: "/profile/edit/:id",
      //   element: (
      //     <ProtectedRoute>
      //       <EditProfile />
      //     </ProtectedRoute>
      //   ),
      // },
      {
        path: "/example",
        element: <Example />,
      },
      {
        path: "/template",
        element: <Template />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/user/:id",
    element: <UserProfileLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/user/:id/",
        element: <UserDashboard />,
      },
      {
        path: "/user/:id/profile",
        element: <Profile />,
      },
      {
        path: "/user/:id/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/user/:id/body",
        element: <UserBody />,
      },
      {
        path: "/user/:id/blogs",
        element: <UserBlogs />,
      },
      {
        path: "/user/:id/diet",
        element: <UserDiet />,
      },
      {
        path: "/user/:id/exercises",
        element: <UserExercises />,
      },
    ],
  },
]);

function App() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "lightgrey" : "background.default",
      }}
      color={"text.primary"}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
