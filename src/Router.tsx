import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import SignUpPage from "./components/organisms/SignUpPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "sign-up", element: <SignUpPage /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}
