import { Box } from "@mui/material";
import React from "react";
import RotateLoader from "react-spinners/RotateLoader";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "calc(100vh - 56px)",
      }}
    >
      <RotateLoader
        color="#8ED1FC"
        loading
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  );
};

export default Loading;
