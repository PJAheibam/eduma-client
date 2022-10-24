import {
  Grid,
  Paper,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registrationSchema } from "../../schemas/registration-from";
//icons
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const initialFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassowd: "",
};

const onSubmit = (values, action) => {
  console.log(action);
};

const Register = () => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: initialFormValue,
    validationSchema: registrationSchema,
    onSubmit,
  });
  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 64px)",
        width: "100%",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid xs={12} sm={6} md={8}></Grid>
        <Grid xs={12} sm={6} md={4} sx={{ height: "100%" }}>
          <Paper
            elevation={1}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              height: "100%",
              padding: 3,
              borderRadius: 0,
              boxShadow: "none",
            }}
          >
            <Typography variant="h4" component="h1" marginBottom={4}>
              Register
            </Typography>
            <Stack spacing={2}>
              <TextField
                size="small"
                variant="standard"
                label="First Name"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName && touched.firstName}
                helperText={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
              />
              <TextField
                size="small"
                variant="standard"
                label="Last Name"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName && touched.lastName}
                helperText={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
              />
              <TextField
                size="small"
                variant="standard"
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <TextField
                size="small"
                variant="standard"
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
              <TextField
                size="small"
                variant="standard"
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassowd}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password && touched.confirmPassowd}
                helperText={
                  errors.confirmPassowd && touched.confirmPassowd
                    ? errors.confirmPassowd
                    : null
                }
              />
              <Stack spacing={1} paddingTop={2}>
                <Typography>
                  Already have an account?{" "}
                  <MuiLink to="/login" component={Link}>
                    Logn In
                  </MuiLink>
                </Typography>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Register
                </Button>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography>Create an account with -</Typography>
                  <IconButton>
                    <GoogleIcon color="warning" />
                  </IconButton>
                  <IconButton>
                    <FacebookIcon color="primary" />
                  </IconButton>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
