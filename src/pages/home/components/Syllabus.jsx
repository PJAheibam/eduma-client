import React from "react";
import { Box, Stack, Typography, colors } from "@mui/material";
import { Container, CtaButton } from "../../../components/";

const Syllabus = () => {
  return (
    <Container
      direction={{
        xs: "column",
        sm: "row",
      }}
      py="1rem"
      sx={{
        backgroundImage:
          "linear-gradient(to right, #2b5876 0%, #4e4376  51%, #2b5876  100%)",
        backgroundSize: "200% auto;",
        backgroundPosition: "left center",
      }}
      justifyContent="space-between"
    >
      <Stack spacing={2} sx={{ maxWidth: "300px" }}>
        <Typography color="white" variant="h4" textTransform="uppercase">
          Syllabus
        </Typography>
        <Typography color="white">
          On a daily basis we talk to companies to fine tune our curriculum.
          Here are the list of courses that are part of this program
        </Typography>
      </Stack>
      <Box>
        <CtaButton>Download Syllabus</CtaButton>
      </Box>
    </Container>
  );
};

export default Syllabus;
