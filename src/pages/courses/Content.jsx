import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import useCourses from "../../hooks/use-courses";
import GridItem from "./GridItem";

const Content = () => {
  const { courses, loading } = useCourses();
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: 3,
        paddingRight: "max(24px, calc((100vw - 1400px)/2))",
      }}
    >
      {!loading &&
        courses &&
        courses.map((course) => <GridItem key={course.id} course={course} />)}
    </Grid>
  );
};

export default Content;
