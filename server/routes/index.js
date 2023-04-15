var express = require("express");
var router = express.Router();
const user = require("./user");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

    const token = createToken({
      sub: user.id,
      user: {
        name: user.name,
      },
    });
    console.log(token);

    res.send("Successful login");
  } catch (err) {
    return next(err);
  }
});

const createToken = (payload) => {
  const { PRIVATE_KEY } = process.env;
  return jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" });
};

router.get("/protected", (req, res, next) => {
  const { PUBLIC_KEY } = process.env;
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    return res.json({
      success: false,
      message: "Token not supplied",
    });
  }

  const token = authHeader.slice(7);

  jwt.verify(token, PUBLIC_KEY, { algorithm: "RS256" }, (err, decoded) => {
    if (err) {
      return res.json(err);
    }
    req.decoded = decoded;
    res.json(decoded);
  });
});

const index = router;

module.exports = { index, user };
