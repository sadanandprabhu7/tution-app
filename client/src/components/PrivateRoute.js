import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
export default function PrivateRoute() {
  // const auth = useSelector((state) => state.auth);
  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/LogIn" />;
}
