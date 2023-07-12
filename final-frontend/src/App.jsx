import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

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
import EditBody from "./pages/userDashboard/EditBody";
import UserDietDetails from "./pages/userDashboard/UserDietDetails";
import UserExerciseDetails from "./pages/userDashboard/UserExerciseDetails";
import ExerciseVideo from "./pages/userDashboard/ExerciseVideo";
import UsersList from "./pages/userDashboard/UsersList";
import UserDetails from "./pages/userDashboard/UserDetails";
import UserDetailsNew from "./pages/userDashboard/UserDetailsNew";
import Exercise from "./pages/userDashboard/Exercise";
import VerifyUser from "./pages/VerifyUser";
import UserGoal from "./pages/userDashboard/UserGoal";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  // let isAuthenticated = false;
  // return isAuthenticated ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" replace state={{ from: location }} />
  // );
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
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
        path: "/exercise",
        element: <Exercise />,
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
        element: (
          <ProtectedRoute>
            <AddBlog />
          </ProtectedRoute>
        ),
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
    path: "/verify-user",
    element: <VerifyUser />,
  },
  {
    path: "/admin/:id",
    element: (
      <ProtectedRoute>
        <UserProfileLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/admin/:id/",
        element: <UserDashboard />,
      },
      {
        path: "/admin/:id/users",
        element: <UsersList />,
      },
      {
        path: "/admin/:id/users/:userId",
        element: <UserDetailsNew />,
      },
    ],
  },
  {
    path: "/user/:id",
    element: (
      <ProtectedRoute>
        <UserProfileLayout />
      </ProtectedRoute>
    ),
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
        path: "/user/:id/edit-body",
        element: <EditBody />,
      },
      {
        path: "/user/:id/blogs",
        element: <UserBlogs />,
      },
      {
        path: "/user/:id/diet",
        element: <UserGoal />,
      },
      {
        path: "/user/:id/goal",
        element: <UserGoal />,
      },
      {
        path: "/user/:id/diet-details",
        element: <UserDietDetails />,
      },
      {
        path: "/user/:id/exercises",
        element: <UserExercises />,
      },
      {
        path: "/user/:id/exercise-details",
        element: <UserExerciseDetails />,
      },
      {
        path: "/user/:id/exercise-video",
        element: <Exercise />,
      },
      // {
      //   path: "/admin/:id/users",
      //   element: <UsersList />,
      // },
      // {
      //   path: "/admin/:id/user-details",
      //   element: <UserDetailsNew />,
      // },
    ],
  },
]);

function App() {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "light" ? "white" : "background.default",
      }}
      color={"text.primary"}
    >
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
