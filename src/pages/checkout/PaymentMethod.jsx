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
  image-resolution: from-image 100dpi;
  aspect-ratio: 16/9;
  object-fit: contain;
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
    filter: drop-shadow(0 5px 5px ${(p) => p.theme.palette.primary.dark});
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
          value={user?.displayName ? user?.displayName : ""}
        />
        <TextField
          InputProps={{
            readOnly: true,
          }}
          label="Email"
          value={user?.email ? user?.email : ""}
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
        <PaymentItem item sm={12} md={6}>
          <ImageButton>
            <Image
              src="https://seeklogo.com/images/B/bkash-logo-FBB258B90F-seeklogo.com.png"
              alt="bkash payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item sm={12} md={6}>
          <ImageButton>
            <Image
              style={{
                objectFit: "cover",
              }}
              src="https://bestlistbd.com/wp-content/uploads/classified-listing/2021/06/56191305_1074649016065535_8893606934653960192_n-3.jpg"
              alt="Rocket Payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item sm={12} md={6}>
          <ImageButton>
            <Image
              src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg"
              alt="Nogod Payment"
            />
          </ImageButton>
        </PaymentItem>
        <PaymentItem item sm={12} md={6}>
          <ImageButton>
            <Image
              src="https://www.seekpng.com/png/full/321-3214934_visa-mastercard-amex-logo-vector-visa-card-logo.png"
              alt="Visa Card Payment"
            />
          </ImageButton>
        </PaymentItem>
      </Grid>
    </Grid>
  );
};

export default PaymentMethod;
