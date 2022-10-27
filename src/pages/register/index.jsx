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
import { Link, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../context/AuthContext";
import { registrationSchema } from "../../schemas/registration-from";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
//icons
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Loading from "../loading";

const initialFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { createUser, loading, user, popupSignIn } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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

  async function onSubmit(values, action) {
    try {
      const res = await createUser(values.email, values.password);
      console.info(res.user);
    } catch (err) {
      console.error(err);
    }
  }
  function handleGoogleSignIn() {
    popupSignIn(googleProvider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleGitHubSignIn() {
    popupSignIn(githubProvider)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
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
          height: {
            xs: "calc(100vh - 64px)",
            sm: "fit-content",
          },
          width: {
            xs: "100%",
            sm: "400px",
          },
        }}
      >
        <Typography variant="h4" component="h1" marginBottom={4}>
          Register
        </Typography>
        <Stack spacing={2}>
          <Stack spacing={3} direction={{ xs: "column", sm: "row" }}>
            <TextField
              autoComplete="off"
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
                errors.firstName && touched.firstName ? errors.firstName : null
              }
            />
            <TextField
              autoComplete="off"
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
          </Stack>
          <TextField
            autoComplete="off"
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

          <Stack spacing={3} direction={{ xs: "column", sm: "row" }}>
            <TextField
              autoComplete="off"
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
              autoComplete="off"
              size="small"
              variant="standard"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.confirmPassword && touched.confirmPassword}
              helperText={
                errors.confirmPassword && touched.confirmPassword
                  ? errors.confirmPassword
                  : null
              }
            />
          </Stack>

          <Button disabled={isSubmitting} type="submit" variant="contained">
            Register
          </Button>
          <Stack spacing={1} paddingTop={2}>
            <Typography>
              Already have an account?{" "}
              <MuiLink to="/login" component={Link}>
                Logn In
              </MuiLink>
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>Create an account with</Typography>
              <IconButton onClick={handleGoogleSignIn}>
                <GoogleIcon color="warning" />
              </IconButton>
              <IconButton onClick={handleGitHubSignIn}>
                <GitHubIcon color="primary" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Register;
