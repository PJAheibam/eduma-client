import React from "react";
import {
  Grid,
  TextField,
  Typography,
  Paper,
  Stack,
  Button,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
//icons
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/login-form";
import { useAuth } from "../../context/AuthContext";

const InputField = (props) => {
  return (
    <TextField autoComplete="off" size="normal" variant="standard" {...props} />
  );
};
const Login = () => {
  const { handleLogin, setLoading } = useAuth();
  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    isSubmitting,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  function onSubmit(values, action) {
    handleLogin(values.email, values.password)
      .then((res) => {
        setLoading(false);
        // console.info(res);
      })
      .catch((error) => {
        console.info(error);
      });
  }
  return (
    <Grid container component="main" sx={{ minHeight: "calc(100vh - 64px)" }}>
      <Grid item xs={12} sm={6} md={8}></Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper
          elevation={1}
          component="form"
          onSubmit={handleSubmit}
          sx={{
            minHeight: "calc(100vh - 64px)",
            maxHeight: "fit-content",
            padding: 3,
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <Typography variant="h4" component="h1" marginBottom={4}>
            Login
          </Typography>
          <Stack spacing={2}>
            <InputField
              name="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email && touched.email}
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={errors.email && touched.email ? errors.email : null}
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              value={values.password}
              error={errors.password && touched.password}
              onBlur={handleBlur}
              onChange={handleChange}
              helperText={
                errors.password && touched.password ? errors.password : null
              }
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
          <Stack marginTop={3} spacing={2} direction="row" alignItems="center">
            <Typography>Login with</Typography>
            <IconButton>
              <GoogleIcon color="warning" />
            </IconButton>
            <IconButton>
              <FacebookIcon color="primary" />
            </IconButton>
          </Stack>
          <Typography marginTop={3} color="text.secondary">
            Don't have any account?{" "}
            <MuiLink to="/register" component={Link}>
              Register here
            </MuiLink>{" "}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
