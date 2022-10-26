import React from "react";
import {
  Box,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const Image = styled("img")`
  height: 150px;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

const ImageButton = styled("button")`
  width: 100%;
  border: none;
  padding: 0;
  background-color: ${(p) => p.theme.palette.grey[100]};
  cursor: pointer;
  outline: none;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid ${(p) => p.theme.palette.grey[300]};
  transition: box-shadow 300ms ease;
`;

const PaymentItem = styled(Grid)`
  overflow: hidden;
  transition: filter 300ms ease;
  &:hover {
    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));
  }
`;

const PaymentMethod = () => {
  const { user, loading } = useAuth();

  return (
    <Grid
      item
      sx={{ p: 3, pl: "max(24px, calc((100vw - 1400px)/2))" }}
      xs={12}
      sm={6}
      md={8}
    >
      <Typography variant="h3" component="h1" marginBottom={4}>
        Checkout
      </Typography>
      <Stack spacing={2} maxWidth={350}>
        <TextField
          InputProps={{
            readOnly: true,
          }}
          label="Full Name"
          value={user?.displayName}
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          label="Email"
          value={user?.email}
        />
      </Stack>
      <Typography component="h1" variant="h4" marginY={3}>
        Select Payment Method
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={{ p: 3, pl: "max(24px, calc((100vw - 1400px)/2))" }}
      >
        <PaymentItem item xs={12} sm={6} md={4}>
          <ImageButton>
            <Image
              src={process.env.REACT_APP_PORT + "/images/bkash-logo.png"}
              alt="bkash payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item xs={12} sm={6} md={4}>
          <ImageButton>
            <Image
              style={{
                objectFit: "cover",
              }}
              src={process.env.REACT_APP_PORT + "/images/rocket-logo.png"}
              alt="Rocket Payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item xs={12} sm={6} md={4}>
          <ImageButton>
            <Image
              src={process.env.REACT_APP_PORT + "/images/nogod-logo.svg"}
              alt="Nogod Payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item xs={12} sm={6} md={4}>
          <ImageButton>
            <Image
              src={process.env.REACT_APP_PORT + "/images/visa-card.png"}
              alt="Visa Card Payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item xs={12} sm={6} md={4}>
          <ImageButton>
            <Image
              width="100%"
              style={{
                objectFit: "contain",
              }}
              src={process.env.REACT_APP_PORT + "/images/mastercard.png"}
              alt="MasterCard Payment"
            />
          </ImageButton>
        </PaymentItem>
      </Grid>
    </Grid>
  );
};

export default PaymentMethod;
