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
  Box,
} from "@mui/material";
//icons
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/login-form";
import { useAuth } from "../../context/AuthContext";
import Loading from "../loading";

const InputField = (props) => {
  return (
    <TextField autoComplete="off" size="normal" variant="standard" {...props} />
  );
};
const Login = () => {
  const { handleLogin, setLoading, user, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
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
        navigate(from, { replace: true });
        // console.info(res);
      })
      .catch((error) => {
        console.info(error);
      });
  }
  if (loading) return <Loading />;
  if (user && user.uid) return <Navigate to="/" />;
  return (
    <Box
      component="main"
      sx={{
        minHeight: "calc(100vh - 64px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: 3,
          borderRadius: {
            xs: 0,
            sm: "6px",
          },
          width: {
            xs: "100%",
            sm: "400px",
          },
          height: {
            xs: "calc(100vh - 64px)",
            sm: "fit-content",
          },
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
    </Box>
  );
};

export default Login;
