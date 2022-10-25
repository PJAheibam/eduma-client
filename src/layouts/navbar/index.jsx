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
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import logo from "../../assets/images/logo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";
import { useMatchedRoute } from "../../hooks/use-matched-route";
import { useAuth } from "../../context/AuthContext";
import { useToggleTheme } from "../../context/theme-context";

const Navbar = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

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
        <Button
          sx={{ display: user?.uid && !loading ? "block" : "none" }}
          variant="outlined"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
