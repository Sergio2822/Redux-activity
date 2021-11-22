import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children, ...props }) => {
  const counter = useSelector(state => state.Login.logValue);
  const [isAuth] = useState(counter);
  console.log(isAuth);
  return (
    <Route
      {...props}
      render={() => (isAuth ? children : <Redirect to="/login" />)}
    />
  );
};