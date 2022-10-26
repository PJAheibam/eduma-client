import {
  Box,
  Stack,
  CardMedia,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Button,
  IconButton,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import PageNotFound from "../page-not-found";
import StarIcon from "@mui/icons-material/Star";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import EastIcon from "@mui/icons-material/East";
import { CtaButton } from "../../components";

const Course = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);
  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_PORT}/courses/${params.id}`
      );
      const data = await res.json();
      setCourse(data);
    } catch (err) {
      console.warn(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [params.id]);

  if (loading) return <Loading />;
  if (!course) return <PageNotFound />;

  return (
    <Stack
      sx={{
        padding: 3,
        paddingRight: "max(24px, calc((100vw - 1400px)/2))",
      }}
      spacing={{
        xs: 4,
        sm: 1,
        md: 0,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h4" component="h1" textTransform="uppercase">
            {course.title}
            <IconButton sx={{ ml: 2 }} variant="outlined" size="large">
              <PictureAsPdfIcon />
            </IconButton>
          </Typography>
          <Typography color="text.secondary">{course.desc}</Typography>
          <CtaButton endIcon={<EastIcon />}>Get Premium Access Now</CtaButton>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardMedia
            component="img"
            width="100%"
            height={300}
            image="https://source.unsplash.com/random/300×300"
          />
        </Grid>
      </Grid>
      <List
        component="ul"
        subheader={
          <ListSubheader
            component="h2"
            sx={{ fontSize: "20px", background: "transparent" }}
          >
            Work Experience-Based Learning Approach
          </ListSubheader>
        }
      >
        {course &&
          course.bulletPoints.map((item, i) => (
            <React.Fragment key={i}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>{item}</ListItemText>
              </ListItem>
            </React.Fragment>
          ))}
      </List>
    </Stack>
  );
};

export default Course;
