import React from "react";
import { Grid, Paper } from "@mui/material";
import LeftSide from "./LeftSide";
import Content from "./Content";
import { Outlet } from "react-router-dom";

const Courses = () => {
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
      </Grid>
      <Grid item xs={12} sm={8} md={9}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default Courses;
