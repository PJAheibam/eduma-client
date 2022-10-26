import React from "react";
import { Grid, Paper } from "@mui/material";
import LeftSide from "./LeftSide";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import useCourses from "../../hooks/use-courses";

const Courses = () => {
  const { courses } = useCourses();
  return (
    <Grid container component="main">
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        component={Paper}
        sx={{ borderRadius: 0, borderRight: ` 2px solid rgb(0,0,0,0.25)` }}
        elevation={0}
      >
        <LeftSide />
        <BreadCrumbs courses={courses} />
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Courses;
