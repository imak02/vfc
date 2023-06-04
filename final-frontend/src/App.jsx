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
import Profile from "./pages/Profile";
import Example from "./pages/Example";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import EditProfile from "./pages/EditProfile";
import DietDetails from "./pages/DietDetails";
import ResetPassword from "./pages/ResetPassword";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetails from "./pages/BlogDetails";
import UserProfileLayout from "./layout/UserProfileLayout";
import UserDashboard from "./pages/UserDashboard";

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
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
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
        element: <UserDashboard />,
      },
      {
        path: "/user/:id/edit-profile",
        element: <EditProfile />,
      },
    ],
  },
]);

function App() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "lightgreen" : "background.default",
      }}
      color={"text.primary"}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
