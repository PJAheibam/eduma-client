import Routes from "./routes/Routes";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import AuthProvider from "./context/AuthContext";

const App = () => {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles theme={mode === "dark" ? darkTheme : lightTheme} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
