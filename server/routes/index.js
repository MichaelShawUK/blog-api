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

const index = router;

module.exports = { index, user };
