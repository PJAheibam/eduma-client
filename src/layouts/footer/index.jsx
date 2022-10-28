import { Button, Link as MuiLink, Paper, Stack } from "@mui/material";
import React from "react";
import Logo from "../../components/logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      component={Paper}
      justifyContent="center"
      alignItems="center"
      sx={{
        borderRadius: 0,
        minHeight: "100px",
        padding: 3,
        paddingInline: "max(24px, calc((100vw - 1400px)/2))",
      }}
      elevation={6}
      spacing={2}
    >
      <MuiLink to="/" component={Link}>
        <Logo />
      </MuiLink>
      <Stack direction="row" spacing={2}>
        <Button to="/" component={Link}>
          Home
        </Button>
        <Button to="/courses/all" component={Link}>
          Courses
        </Button>
        <Button to="/blog" component={Link}>
          Blog
        </Button>
        <Button to="/faq" component={Link}>
          FAQ
        </Button>
      </Stack>
    </Stack>
  );
};

export default Footer;
