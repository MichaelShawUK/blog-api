import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import mongoose from "mongoose";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/blog_api");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
