import { Box, Stack, Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "400px",
        height: "calc(100vh - 64px)",
        maxWidth: "1280px",
      }}
    >
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1" color="error" textAlign="center">
          404
        </Typography>
        <Typography color="text.secondary" textAlign="center">
          The page you are looking for is not available
        </Typography>
      </Stack>
    </Box>
  );
};

export default PageNotFound;
