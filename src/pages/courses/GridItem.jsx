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

const GridItem = ({ course }) => {
  const { imageURL, name, desc } = course;
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
          <Button>Learn more</Button>
          <Button
            size="small"
            color="success"
            variant="outlined"
            sx={{ display: "block", marginLeft: 5 }}
          >
            Get Premium Access
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridItem;
