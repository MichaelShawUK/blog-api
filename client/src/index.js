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
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      {
        path: "/posts/:postId",
        element: <BlogArticle />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Posts />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // {
  //   path: "/posts/:postId",
  //   element: <BlogArticle />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
