import { Grid, Typography, Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CtaButton from "../../components/buttons/CtaButton";
import { Stack } from "@mui/system";

const OrderSummery = ({ course, loading }) => {
  return (
    <Grid
      item
      sx={{ p: 3, pr: "max(24px, calc((100vw - 1400px)/2))" }}
      xs={12}
      sm={6}
      md={4}
      bgcolor="background.paper"
    >
      <Stack spacing={3}>
        <Typography typography="h4" component="h1">
          {course?.title}
        </Typography>
        <Typography fontSize="large" color="text.secondary">
          {course?.desc}
        </Typography>

        <Box>
          <Typography variant="h5" textAlign="right">
            {course?.price}
          </Typography>
          <Typography
            borderBottom={"2px solid #c9caca"}
            color="text.secondary"
            textAlign="right"
          >
            One time fee
          </Typography>
        </Box>
      </Stack>
      <Typography mt={3} variant="h5" textAlign="right">
        Total: {course?.price}
      </Typography>

      <CtaButton sx={{ zIndex: 1 }}>Place order</CtaButton>
    </Grid>
  );
};

export default OrderSummery;
