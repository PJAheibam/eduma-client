import { Stack, Typography } from "@mui/material";
import React from "react";

const ProgramOverview = () => {
  return (
    <Stack spacing={3}>
      <Typography
        fontWeight="bold"
        textAlign="center"
        variant="h4"
        component="h2"
      >
        Program Overview
      </Typography>
    </Stack>
  );
};

export default ProgramOverview;
