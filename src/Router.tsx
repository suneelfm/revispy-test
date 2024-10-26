import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import SignUpPage from "./components/organisms/SignUpPage";
import SignInPage from "./components/organisms/SignInPage";
import Categories from "./components/organisms/Categories";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Categories /> },
        { path: "sign-up", element: <SignUpPage /> },
        { path: "sign-in", element: <SignInPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
