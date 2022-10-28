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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading";
import PageNotFound from "../page-not-found";
import StarIcon from "@mui/icons-material/Star";
import EastIcon from "@mui/icons-material/East";
import { CtaButton } from "../../components";
import pdfDownload from "../../assets/images/pdf-download.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DownloadPDF from "./DownloadPDF";

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
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            mb={2}
            variant="h4"
            component="h1"
            textTransform="uppercase"
          >
            {course.name}
          </Typography>
          <Typography color="text.secondary">{course.desc}</Typography>
          {/* <Button sx={{ mt: 3, mx: "auto" }} size="small">
            <img height={50} src={pdfDownload} alt="Download PDF" />
          </Button> */}
          <PDFDownloadLink
            document={<DownloadPDF course={course} />}
            fileName="test"
          >
            {({ loading, error }) => {
              if (error) {
                console.log(error);
                return <>error!</>;
              }
              if (loading) return <button>Loading</button>;
              else
                return (
                  <Button sx={{ mt: 3, mx: "auto" }} size="small">
                    <img height={50} src={pdfDownload} alt="Download PDF" />
                  </Button>
                );
            }}
          </PDFDownloadLink>
        </Grid>
        <Grid item sm={12} md={6}>
          <CardMedia
            component="img"
            width="100%"
            height={300}
            image={course?.imageURL}
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
      <Box
        sx={{
          paddingBottom: 3,
        }}
      >
        <CtaButton
          component={Link}
          to={`/checkout/course-${course.id}`}
          endIcon={<EastIcon />}
        >
          Get Premium Access Now
        </CtaButton>
      </Box>
    </Stack>
  );
};

export default Course;
