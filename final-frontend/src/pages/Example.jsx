import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Link } from "react-router-dom";
import {
  Accessibility,
  AccountBox,
  Article,
  Fastfood,
  SelfImprovement,
  Widgets,
} from "@mui/icons-material";

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

export default function Example() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      textColor="inherit"
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
}
