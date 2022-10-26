import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMatchedRoute } from "../../hooks/use-matched-route";
import { Link } from "react-router-dom";
//icons
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const NavTabs = ({ handleClose }) => {
  const currentTab = useMatchedRoute(["/", "/courses", "/blog", "/faq"]);
  return (
    <List component="nav">
      <ListItemButton
        onClick={handleClose}
        selected={currentTab === "/"}
        to="/"
        component={Link}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItemButton>
      <ListItemButton
        onClick={handleClose}
        selected={currentTab === "/courses"}
        to="/courses/all"
        component={Link}
      >
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText>Courses</ListItemText>
      </ListItemButton>
      <ListItemButton
        onClick={handleClose}
        selected={currentTab === "/blog"}
        to="/blog"
        component={Link}
      >
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText>Blog</ListItemText>
      </ListItemButton>
      <ListItemButton
        onClick={handleClose}
        selected={currentTab === "/faq"}
        to="/faq"
        component={Link}
      >
        <ListItemIcon>
          <LiveHelpIcon />
        </ListItemIcon>
        <ListItemText>FAQ</ListItemText>
      </ListItemButton>
    </List>
  );
};

export default NavTabs;
