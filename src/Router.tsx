import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import SignUpPage from "./components/organisms/SignUpPage";
import SignInPage from "./components/organisms/SignInPage";
import Categories from "./components/organisms/Categories";
import AuthWrapper from "./AuthWrapper";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <AuthWrapper>
              <Outlet />
            </AuthWrapper>
          ),
          children: [{ index: true, element: <Categories /> }],
        },
        { path: "sign-up", element: <SignUpPage /> },
        { path: "sign-in", element: <SignInPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
