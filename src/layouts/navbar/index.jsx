import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import logo from "../../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import userIcon from "../../assets/icons/user-icon-1.png";
import { Link } from "react-router-dom";
import { useMatchedRoute } from "../../hooks/use-matched-route";
import { useAuth } from "../../context/AuthContext";
import { useToggleTheme } from "../../context/theme-context";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const { user, handleLogOut, loading } = useAuth();
  // console.info(loading, user);
  const currentPath = useMatchedRoute(["/", "/courses", "/faq"]);
  return (
    <AppBar position="static" sx={{ bgcolor: "background.paper" }}>
      <Toolbar
        sx={{
          maxWidth: "1400px",
          // mx: "auto",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Box to="/" component={Link}>
            {" "}
            <img height="40px" src={logo} alt="Logo" />{" "}
          </Box>
        </Stack>
        <Tabs value={currentPath} sx={{ mr: "1rem" }}>
          <Tab label="Home" value="/" to="/" component={Link} />
          <Tab
            label="Courses"
            value="/courses"
            to="/courses"
            component={Link}
          />
          <Tab label="FAQ" value="/faq" to="/faq" component={Link} />
        </Tabs>
        <IconButton sx={{ marginRight: 2 }} onClick={toggleTheme}>
          {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Stack
          sx={{
            display: user?.uid && !loading ? "none" : "block",
          }}
          spacing={2}
          direction="row"
        >
          <Button variant="outlined" to="/login" component={Link}>
            Login
          </Button>
          <Button
            variant="contained"
            to="/register"
            component={Link}
            endIcon={<EastIcon />}
          >
            Register
          </Button>
        </Stack>
        <IconButton
          id="user-menu-button"
          sx={{ display: user?.uid && !loading ? "block" : "none" }}
          onClick={openMenu}
          title="User Menu"
          aria-label="User Menu"
          aria-controls={open ? "user-profile-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar src={userIcon} />
        </IconButton>
        <Menu
          id="user-profile-menu"
          open={open}
          onClose={closeMenu}
          anchorEl={anchorEl}
          MenuListProps={{ "aria-labelledby": "user-menu-button" }}
        >
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <LogoutIcon />{" "}
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
