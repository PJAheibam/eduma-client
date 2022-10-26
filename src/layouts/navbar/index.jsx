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

//icons
import EastIcon from "@mui/icons-material/East";
import logo from "../../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import userIcon from "../../assets/icons/user-icon-1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useToggleTheme } from "../../context/theme-context";
import { useState } from "react";
import MenuDrawer from "../drawer";
import NavTabs from "./NavTabs";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const theme = useTheme();
  const toggleTheme = useToggleTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isUserMenuOpne = Boolean(anchorEl);

  function openUserMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function closeUserMenu() {
    setAnchorEl(null);
  }
  // console.info(loading, user);
  function handleLogOut() {
    logOut();
    closeUserMenu();
  }

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "background.paper",
          paddingInline: "calc((100vw - 1400px)/2)",
        }}
      >
        <Toolbar sx={{ paddingInline: "20px" }}>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <Box to="/" component={Link}>
              {" "}
              <img height="40px" src={logo} alt="Logo" />{" "}
            </Box>
          </Stack>

          <NavTabs />

          <IconButton sx={{ marginRight: 2 }} onClick={toggleTheme}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>

          {/* LOGIN - REGISTER BUTTON */}
          <Stack
            sx={{
              display: loading ? "none" : user?.uid ? "none" : "flex",
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
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              Register
            </Button>
          </Stack>

          {/* USER PROFILE ICON BUTTON */}
          <IconButton
            id="user-menu-button"
            sx={{ display: loading ? "none" : user?.uid ? "block" : "none" }}
            onClick={openUserMenu}
            title="User Menu"
            aria-label="User Menu"
            aria-controls={isUserMenuOpne ? "user-profile-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={isUserMenuOpne ? "true" : undefined}
          >
            <Avatar src={user?.photoURL ? user.photoURL : userIcon} />
          </IconButton>
          <Menu
            id="user-profile-menu"
            open={isUserMenuOpne}
            onClose={closeUserMenu}
            anchorEl={anchorEl}
            MenuListProps={{ "aria-labelledby": "user-menu-button" }}
          >
            <MenuItem
              disabled
              sx={{ display: user?.displayName ? "block" : "none" }}
            >
              {user?.displayName}
            </MenuItem>
            <MenuItem onClick={closeUserMenu}>
              <ListItemIcon>
                <AccountCircleIcon />{" "}
              </ListItemIcon>
              <ListItemText>My Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={closeUserMenu}>
              <ListItemIcon>
                <SettingsIcon />{" "}
              </ListItemIcon>
              <ListItemText>Setting</ListItemText>
            </MenuItem>
            <MenuItem
              onClick={handleLogOut}
              sx={{
                color: "error.main",
                "&:hover": {
                  bgcolor: "rgba(244, 67, 54, 0.08)",
                },
              }}
            >
              <ListItemIcon>
                <LogoutIcon color="error" />{" "}
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
          <IconButton
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              marginLeft: "1rem",
            }}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer open={isMenuOpen} handleClose={toggleMenu} />
    </>
  );
};

export default Navbar;
