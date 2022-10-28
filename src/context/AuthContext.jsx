import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../features/auth/Auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  // FUNCTIONS
  function createUser(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleLogin(email, password) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  function popupSignIn(provider) {
    return signInWithPopup(auth, provider);
  }

  const values = {
    user,
    loading,
    setLoading,
    createUser,
    logOut,
    handleLogin,
    popupSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.info(currentUser);
      if (currentUser) setUser(currentUser);
      else setUser(null);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
