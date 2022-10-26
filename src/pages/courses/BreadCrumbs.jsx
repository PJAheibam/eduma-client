import React from "react";
import {
  Breadcrumbs as MuiBreadCrumbs,
  Link as MuiLink,
  Box,
} from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const BreadCrumbs = ({ courses }) => {
  let path = "";

  const { pathname } = useLocation();

  const paths = pathname.split("/");

  return (
    <Box margin={3}>
      <MuiBreadCrumbs>
        {paths.map((name, i) => {
          if (i) path = path + "/" + name;

          console.log(path);
          return (
            <MuiLink
              key={i}
              to={path ? path : "/"}
              textTransform="capitalize"
              component={Link}
            >
              {isNaN(parseInt(name))
                ? !name
                  ? "Home"
                  : name
                : courses
                ? courses.find((course) => course.id === parseInt(name))?.name
                : ""}
            </MuiLink>
          );
        })}
      </MuiBreadCrumbs>
    </Box>
  );
};

export default BreadCrumbs;
