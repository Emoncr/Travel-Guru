import React, { useContext } from "react";
import { userLoginContext } from "../../Contexts/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const { state } = useContext(userLoginContext);
  const location = useLocation();
  const { user } = state;

  return (
    <>
      {user.email ? (
        <Outlet />
      ) : (
        <Navigate to={"/login"} state={{ from: location }} />
      )}
    </>
  );
};

export default PrivateRoute;
