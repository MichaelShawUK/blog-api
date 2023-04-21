import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Posts from "./components/Posts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorPage";
import BlogArticle from "./components/BlogArticle";
import Login from "./components/Login";
import Register from "./components/Register";
import Root from "./components/Root";

import Protected from "./components/Protected";
import protectedLoader from "./loaders/protected";

import loginAction from "./action/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:postId",
        element: <BlogArticle />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/protected",
    element: <Protected />,
    loader: protectedLoader,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
