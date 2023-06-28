import { Box, Card, Paper, Typography } from "@mui/material";
import DbCard from "../../components/DbCard";
import React, { PureComponent } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CalendarMonth } from "@mui/icons-material";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const UserDashboard = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          Dashboard
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CalendarMonth />
          <Typography variant="h6" component="h4">
            {new Date().toDateString()}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          my: 3,
          display: "flex",
          flexDirection: { xs: "column", xl: "row" },
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { xs: "100%", xl: "auto" } }}>
          <DbCard
            title="Exercise"
            subtitle="1 hr 52 minutes"
            value={55}
            width={450}
            image="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", xl: "auto" } }}>
          <DbCard
            title="Diet"
            subtitle="3214 calories"
            value={85}
            width={450}
            image="https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Box>
        <Box sx={{ width: { xs: "100%", xl: "auto" } }}>
          <DbCard
            title="Sleep"
            subtitle="5 hr 52 minutes"
            value={95}
            width={450}
            image="https://images.pexels.com/photos/6541417/pexels-photo-6541417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Box>
      </Box>
      <Card sx={{ p: 2 }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: "bold" }}>
          Statistics
        </Typography>
        <Box sx={{ width: "100%", height: 500, maxWidth: "100vw" }}>
          <ResponsiveContainer>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </Card>
    </Box>
  );
};

export default UserDashboard;
