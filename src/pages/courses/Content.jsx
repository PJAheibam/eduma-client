import { Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";

const Content = () => {
  const [courses, setCourses] = useState(null);
  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_COURSES_API);
    const data = await res.json();
    setCourses(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: 3,
        paddingRight: "max(24px, calc((100vw - 1400px)/2))",
      }}
    >
      {courses &&
        courses.map((course) => <GridItem key={course.id} course={course} />)}
    </Grid>
  );
};

export default Content;
