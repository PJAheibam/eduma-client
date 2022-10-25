import { createTheme } from "@mui/material";
import { blueGrey, deepPurple } from "@mui/material/colors";

export default createTheme({
  palette: {
    mode: "light",
    secondary: {
      main: deepPurple[500],
    },
    background: {
      default: blueGrey[50],
    },
  },
});
