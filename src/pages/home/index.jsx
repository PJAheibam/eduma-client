import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Hero from "./Hero";
import ProgramOverview from "./ProgramOverview";

const Home = () => {
  return (
    <Stack spacing={8} minHeight="calc(100vh - 56px)">
      <Hero />
      <ProgramOverview />
    </Stack>
  );
};

export default Home;
