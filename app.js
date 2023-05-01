var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const postsRouter = require("./routes/posts");

async function connectDb() {
  await mongoose.connect(process.env.MONGODB_LOCAL);
}
connectDb().catch((err) => console.log(err));

var app = express();

// DEVELOPMENT ONLY
app.use(cors());
// DEV ONLY
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/posts", postsRouter);

module.exports = app;
