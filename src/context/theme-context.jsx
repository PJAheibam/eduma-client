import { createContext, useContext } from "react";

const ThemeContext = createContext();
export const useToggleTheme = () => useContext(ThemeContext);

const ThemeHandler = ({ children, toggleMode }) => {
  const toggleTheme = () => {
    toggleMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeHandler;
