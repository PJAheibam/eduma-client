import React from "react";
import {
  Paper,
  List,
  ListItemButton,
  Typography,
  ListItemText,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

const LeftSide = () => {
  const [courses, setCourses] = useState(null);
  //FETCH DATA FROM API
  async function fetchData() {
    const res = await fetch(process.env.REACT_APP_COURSES_API);
    const data = await res.json();
    setCourses(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Paper
      sx={{
        padding: "24px",
        paddingLeft: "max(24px, calc((100vw - 1400px)/2))",
        borderRadius: 0,
      }}
      elevation={1}
    >
      <Typography variant="h5" component="h1">
        Courses List
      </Typography>
      <List>
        <ListItemButton>
          <ListItemText>All</ListItemText>
        </ListItemButton>
        {courses &&
          courses.map((course) => (
            <React.Fragment key={course?.id}>
              <ListItemButton>
                <ListItemText>{course?.courseName}</ListItemText>
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
      </List>
    </Paper>
  );
};

export default LeftSide;
