const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, password, name } = req.body;

    const user = new User({
      username,
      password,
      name,
    });
    console.log(user);
    await user.save();
    res.json(req.body);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
