import Routes from "./routes/Routes";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import AuthProvider from "./context/AuthContext";
import ThemeHandler from "./context/theme-context";

const App = () => {
  const [mode, setMode] = useState("dark");
  return (
    <>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <ThemeHandler toggleMode={setMode}>
          <GlobalStyles theme={mode === "dark" ? darkTheme : lightTheme} />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </ThemeHandler>
      </ThemeProvider>
    </>
  );
};

export default App;
