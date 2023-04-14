var express = require("express");
var router = express.Router();
const user = require("./user");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.get("/", function (req, res, next) {
  res.json({ message: "Welcome to Blog API" });
});

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, name } = req.body;

    if (await User.findOne({ username })) {
      return res.send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      name,
    });

    await user.save();
    res.send(`${username} has been registered...`);
  } catch (err) {
    return next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.send("User does not exist");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.send("Incorrect password");
    }

    res.send("Successful login");
  } catch (err) {
    return next(err);
  }
});

const index = router;

module.exports = { index, user };
