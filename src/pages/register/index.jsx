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
  Alert,
  Avatar,
} from "@mui/material";
import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useAuth } from "../../context/AuthContext";
import { registrationSchema } from "../../schemas/registration-from";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
//icons
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import Loading from "../loading";
import { useState } from "react";
import ErrorAlert from "../login/ErrorAlart";

const initialFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const {
    createUser,
    loading,
    setLoading,
    user,
    popupSignIn,
    uploadProfilePic,
  } = useAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || "/";

  console.log(from + "->reg");

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
  function handleFileChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  async function onSubmit(values, action) {
    try {
      const res = await createUser(values.email, values.password);
      const photoURL = await uploadProfilePic(res.user, photo);
      await updateProfile(res.user, {
        displayName: values.firstName + " " + values.lastName,
        photoURL,
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setError("user email is already in use");
      setLoading(false);
    }
  }
  function handleGoogleSignIn() {
    popupSignIn(googleProvider)
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  }

  function handleGitHubSignIn() {
    popupSignIn(githubProvider)
      .then((res) => {
        console.log(res);
        navigate(from, { replace: true });
      })
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

          <Stack spacing={3}>
            <Button variant="outlined" component="label">
              Upload Profile Pic
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={handleFileChange}
              />
            </Button>
            {photo && <TextField size="small" disabled value={photo.name} />}
          </Stack>
          <Button disabled={isSubmitting} type="submit" variant="contained">
            Register
          </Button>
          <ErrorAlert error={error} />
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
