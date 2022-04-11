import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute({ component: Component, ...rest }) {
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        return auth.token ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
