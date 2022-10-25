import React from "react";
import {
  List,
  ListItemButton,
  Typography,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LeftSide = () => {
  const [courses, setCourses] = useState(null);
  const { pathname } = useLocation();
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
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        padding: "24px",
        paddingLeft: "max(24px, calc((100vw - 1400px)/2))",
        position: "sticky",
        top: 0,
      }}
      elevation={1}
    >
      <Typography variant="h5" component="h1">
        Courses List
      </Typography>
      <List>
        <ListItemButton
          selected={pathname === "/courses/all"}
          to="/courses/all"
          component={Link}
        >
          <ListItemText>All</ListItemText>
        </ListItemButton>
        {courses &&
          courses.map((course) => (
            <React.Fragment key={course?.id}>
              <ListItemButton
                selected={pathname === `/courses/${course?.id}`}
                to={`/courses/${course?.id}`}
                component={Link}
              >
                <ListItemText>{course?.name}</ListItemText>
              </ListItemButton>
              <Divider />
            </React.Fragment>
          ))}
      </List>
    </Box>
  );
};

export default LeftSide;
