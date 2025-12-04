import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
// export const AuthContext = createContext();
export const AuthContext = createContext()
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(loading, user);

  const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
    .finally(() => setLoading(false));
};

const signIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
    .finally(() => setLoading(false));
};


  const updateUser = (updatedData) => {
  return updateProfile(auth.currentUser, updatedData).catch(err => console.log(err));
};


  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
  };
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;

};

export default AuthProvider;