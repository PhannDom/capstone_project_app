import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

interface IUserContext {
  currentUser: any;
  setCurrentUser?: () => null;
}

const defaultState = {
  currentUser: null,
};

export const UserContext = createContext<IUserContext>(defaultState);

export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(defaultState.currentUser);

  const updateCurrentUser = (user: any) => {
    setCurrentUser(user);
  };

  const value = { currentUser, updateCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
