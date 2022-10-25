import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const GridItem = ({ course }) => {
  const { imageURL, name, desc, id } = course;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        elevation={4}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <CardMedia component="img" height="250" image={imageURL} />
        <CardContent>
          <Typography variant="h5" textTransform="uppercase" component="h1">
            {name}
          </Typography>
          <Typography color="text.secondary">{desc}</Typography>
        </CardContent>
        <CardActions
          sx={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "start",
          }}
        >
          <Button to={`/courses/${id}`} component={Link}>
            Learn more
          </Button>
          <Button
            disableElevation
            size="small"
            variant="contained"
            sx={{ display: "flex", marginLeft: 1, marginBottom: 2 }}
            endIcon={<DoubleArrowIcon />}
          >
            Get Premium Access
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridItem;
