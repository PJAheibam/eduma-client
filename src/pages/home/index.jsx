import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Hero from "./components/Hero";
import ProgramOverview from "./components/ProgramOverview";
import Syllabus from "./components/Syllabus";
import Enroll from "./components/Enroll";

const Home = () => {
  return (
    <Stack spacing={8} minHeight="calc(100vh - 56px)">
      <Hero />
      <ProgramOverview />
      <Syllabus />
      <Enroll />
    </Stack>
  );
};

export default Home;
