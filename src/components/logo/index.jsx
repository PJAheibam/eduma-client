import { useTheme } from "@mui/system";
import React from "react";
import darkLogo from "../../assets/images/eduma-logo-dark.png";
import lightLogo from "../../assets/images/eduma-logo-light.png";

const Logo = () => {
  const theme = useTheme();
  if (theme.palette.mode === "dark")
    return <img height="40px" src={darkLogo} alt="Eduma Logo" />;
  else return <img height="40px" src={lightLogo} alt="Eduma Logo" />;
};

export default Logo;
