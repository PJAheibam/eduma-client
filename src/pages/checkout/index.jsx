import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import OrderSummery from "./OrderSummery";
import PaymentMethod from "./PaymentMethod";
import PageNotFound from "../page-not-found";
import { useParams } from "react-router-dom";
import Loading from "../loading";

const Checkout = () => {
  const { courseID } = useParams();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  async function fetchData() {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_PORT}/courses/${courseID.split(`-`)[1]}`
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
  }, []);

  if (loading) return <Loading />;

  if (!course) return <PageNotFound />;

  return (
    <Grid container>
      <PaymentMethod />
      <OrderSummery course={course} />
    </Grid>
  );
};

export default Checkout;
