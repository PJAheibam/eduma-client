import React from "react";
import { Grid } from "@mui/material";
import LeftSide from "./LeftSide";
import Content from "./Content";

const Courses = () => {
  return (
    <Grid container component="main">
      <Grid item xs={12} sm={6} md={3}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} sm={6} md={9}>
        <Content />
      </Grid>
    </Grid>
  );
};

export default Courses;
