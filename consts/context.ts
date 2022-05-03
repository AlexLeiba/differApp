import React from "react";
import { createContext } from "react";

export const AuthContext = createContext({
  signIn: (token: "") => {},
  signOut: () => {},
});

export const UserTokenStateContext = createContext({
  isLoading: true,
  userToken: null,
  userNumber: "",
  setUserNumber: (number) => number,
});
