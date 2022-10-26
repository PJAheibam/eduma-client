import React from "react";
import {
  Breadcrumbs as MuiBreadCrumbs,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const BreadCrumbs = ({ courses }) => {
  let path = "";

  const { pathname } = useLocation();

  const paths = pathname.split("/");

  return (
    <Box
      margin={3}
      sx={{
        display: {
          xs: "block",
          sm: "none",
        },
      }}
    >
      <MuiBreadCrumbs>
        {paths.map((name, i) => {
          if (i) path = path + "/" + name;

          return (
            <MuiLink
              key={i}
              to={path ? (path === "/courses" ? "/courses/all" : path) : "/"}
              textTransform="capitalize"
              component={Link}
            >
              {isNaN(parseInt(name)) ? (
                !name ? (
                  <HomeIcon />
                ) : (
                  name
                )
              ) : courses ? (
                courses.find((course) => course.id === parseInt(name))?.name
              ) : (
                ""
              )}
            </MuiLink>
          );
        })}
      </MuiBreadCrumbs>
    </Box>
  );
};

export default BreadCrumbs;
