var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

async function connectDb() {
  await mongoose.connect(process.env.MONGODB_LOCAL);
}
connectDb().catch((err) => console.log(err));

const routes = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes.index);
app.use("/users", routes.user);

module.exports = app;
