import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Avatar,
  IconButton,
  LinearProgress,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import MyLinearProgress from "../../components/MyLinearProgress";
import { Delete, Info, Preview } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";

export default function UsersList() {
  const params = useParams();
  const userId = params.id;
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "image",
      headerName: "Profile Picture",
      width: 160,
      renderCell: (params) => (
        <Avatar
          src={params.value}
          alt={params.row.firstName}
          sx={{ height: 50, width: 50, m: 1 }}
        />
      ),
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 150,
      editable: true,
    },
    {
      field: "program",
      headerName: "Program",
      width: 150,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ width: "100%" }}>
          <MyLinearProgress value={params?.value} color="blue" height={10} />
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Box sx={{ display: "flex", px: 2 }}>
          <Link to={`/admin/${userId}/users/123`} className="links">
            <Tooltip arrow title="User Info">
              <IconButton>
                <Info color="info" />
              </IconButton>
            </Tooltip>
          </Link>
          <Tooltip title="Remove User" arrow>
            <IconButton>
              <Delete color="error" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      image: "/profile.jpeg",
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 2,
      image: "/profile.jpeg",
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      gender: "Female",
      program: "Bulking",
      status: 20,
    },
    {
      id: 3,
      image: "/profile.jpeg",
      lastName: "Lannister",
      firstName: "Jaime",
      age: 29,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 4,
      image: "/profile.jpeg",
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      gender: "Female",
      program: "Bulking",
      status: 20,
    },
    {
      id: 5,
      image: "/profile.jpeg",
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 6,
      image: "/profile.jpeg",
      lastName: "Melisandre",
      firstName: null,
      age: 150,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 7,
      image: "/profile.jpeg",
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 8,
      image: "/profile.jpeg",
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
    {
      id: 9,
      image: "/profile.jpeg",
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      gender: "Male",
      program: "Weight Loss",
      status: 80,
    },
  ];
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        All Users
      </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          getRowHeight={() => "auto"}
          getEstimatedRowHeight={() => 100}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Paper>
  );
}
