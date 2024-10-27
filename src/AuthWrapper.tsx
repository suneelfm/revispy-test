import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "./serviceQuery/axiosInstance";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const isAuthenticated = localStorage.getItem("revisPyAuthToken");

  if (!isAuthenticated) {
    return <Navigate to={"/sign-in"} />;
  }
  axiosInstance.defaults.headers.common["authorization"] = isAuthenticated;
  return <>{children}</>;
}
