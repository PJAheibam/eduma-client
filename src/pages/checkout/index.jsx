import React from "react";
import { Grid, Typography } from "@mui/material";
import OrderSummery from "./OrderSummery";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
  return (
    <Grid container>
      <PaymentMethod />
      <OrderSummery />
    </Grid>
  );
};

export default Checkout;
