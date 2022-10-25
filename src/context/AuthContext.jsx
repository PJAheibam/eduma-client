import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // FUNCTIONS
  function createUser() {
    alert("Create User");
  }
  function handleLogOut() {
    alert("Handle Log out");
  }

  const values = { loading, createUser, handleLogOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
