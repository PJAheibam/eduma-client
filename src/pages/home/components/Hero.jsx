import { Stack, Typography } from "@mui/material";
import React from "react";
import dots2 from "../../../assets/images/dots-wave-2.jpg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Stack
      sx={{
        minHeight: "300px",
        backgroundImage: `url(${dots2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 5,
        paddingInline: "max(70px, calc((100vw - 1400px)/2))",
      }}
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        color="white"
        textTransform="uppercase"
        textAlign="center"
        variant="h3"
      >
        For beginners
      </Typography>
      <Typography color="white" fontSize="large" textAlign="center">
        Start here if you are new to programming or new to Android development.
        These courses show you how to build Android apps using best practices
        recommended by Google. No programming experience needed.
      </Typography>
    </Stack>
  );
};

export default Hero;
