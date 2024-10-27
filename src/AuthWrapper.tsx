import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const isAuthenticated = localStorage.getItem("revisPyAuthToken");

  if (!isAuthenticated) {
    return <Navigate to={"/sign-in"} />;
  }

  return <>{children}</>;
}
