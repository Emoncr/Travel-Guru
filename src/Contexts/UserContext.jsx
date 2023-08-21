import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { loginUserState, loignUserReducer } from "../Reducers/loignUserReducer";

export const userLoginContext = createContext();

const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(loignUserReducer, loginUserState);

  const addLoginUser = (userData) => {
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: { userData },
    });
  };

  const handleSignOut = () => {
    dispatch({
      type: "USER_LOGOUT",
    });
  };

  return (
    <userLoginContext.Provider value={{ state, addLoginUser, handleSignOut }}>
      {children}
    </userLoginContext.Provider>
  );
};

export default UserContext;
