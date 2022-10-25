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

const GridItem = (props) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia />
        <CardContent>
          <Typography variant="h5" textTransform="uppercase" component="h1">
            Heading
          </Typography>
          <Typography color="text.secondary">Body text</Typography>
        </CardContent>
        <CardActions>
          <Button>Learn more</Button>
          <Button>Get Premium Access</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GridItem;
