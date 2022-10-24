import React from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";
import { useMatchedRoute } from "../../hooks/use-matched-route";

const Navbar = () => {
  const currentPath = useMatchedRoute(["/", "/courses", "/faq"]);

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          maxWidth: "1400px",
          // mx: "auto",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Typography>EDUMA</Typography>
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
        <Stack spacing={2} direction="row">
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
