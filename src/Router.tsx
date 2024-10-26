import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/organisms/Layout";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return <RouterProvider router={router} />;
}
