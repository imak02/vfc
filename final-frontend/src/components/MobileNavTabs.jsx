import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import {
  Accessibility,
  AccountBox,
  Article,
  Fastfood,
  SelfImprovement,
  Widgets,
} from "@mui/icons-material";
import { Paper } from "@mui/material";

const pageList = [
  {
    name: "Dashboard",
    id: "dashboard",
    icon: <Widgets color="inherit" />,
    destination: "/user/123",
  },
  {
    name: "Profile",
    id: "profile",
    icon: <AccountBox />,
    destination: "/user/123/profile",
  },
  {
    name: "Body",
    id: "body",
    icon: <Accessibility />,
    destination: "/user/123/body",
  },
  { name: "Diet", id: "diet", icon: <Fastfood />, destination: "/diet" },
  { name: "Blogs", id: "blog", icon: <Article />, destination: "/blog" },
  {
    name: "Exercises",
    id: "exercises",
    icon: <SelfImprovement />,
    destination: "/exercises",
  },
];

const MobileNavTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      textColor="inherit"
      indicatorColor="secondary"
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      sx={{ width: "100%" }}
      variant="scrollable"
    >
      {pageList.map((page) => (
        <Tab
          key={page.id}
          icon={page.icon}
          label={page.name}
          aria-label={page.name}
          LinkComponent={Link}
          to={page.destination}
          sx={{ width: 10 }}
        />
      ))}
    </Tabs>
  );
};

export default MobileNavTabs;
