import { createContext, useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/auth/Auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  // FUNCTIONS
  function createUser(email, password) {
    alert("Create User");
    createUserWithEmailAndPassword(auth, email, password);
  }
  function handleLogOut() {
    alert("Handle Log out");
  }

  const values = { loading, createUser, handleLogOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
