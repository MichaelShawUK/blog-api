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
import NewBlog from "./components/NewBlog";

import Protected from "./components/Protected";
import protectedLoader from "./loaders/protected";
import commentsLoader from "./loaders/comments";
import postsLoader from "./loaders/posts";

import loginAction from "./action/login";
import registerAction from "./action/register";
import commentAction from "./action/comment";
import newBlogAction from "./action/newBlog";

const router = createBrowserRouter([
  {
    // path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "/posts/new",
        element: <NewBlog />,
        action: newBlogAction,
      },
      {
        path: "/posts/:postId",
        element: <BlogArticle />,
        loader: commentsLoader,
      },
      {
        path: "/posts/:postId/comments",
        action: commentAction,
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
    action: registerAction,
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
