var express = require("express");
var router = express.Router();
const user = require("./user");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post("/register", async (req, res, next) => {
  try {
    const { username, password, name } = req.body;

    if (await User.findOne({ username })) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      name,
    });

    await user.save();
    res.json({
      success: true,
      message: `${username} has been registered`,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Unable to register user",
    });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    const { PRIVATE_KEY } = process.env;
    const payload = {
      sub: user.id,
      user: {
        name: user.name,
      },
    };

    jwt.sign(payload, PRIVATE_KEY, { algorithm: "RS256" }, (err, token) => {
      if (err) {
        return res.json({
          success: false,
          message: "Error creating token",
        });
      }
      return res.json({
        success: true,
        message: "Successful login,",
        token,
      });
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Unable to log user in",
    });
  }
});

const isTokenValid = (req, res, next) => {
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
      return res.json({
        success: false,
        message: "Could not verify token",
        error: err,
      });
    }
    req.payload = decoded;
    next();
  });
};

router.get("/protected", isTokenValid, (req, res, next) => {
  res.json({
    success: true,
    message: "Accessing protected route",
    id: req.payload.sub,
    name: req.payload.user.name,
  });
});

const index = router;

module.exports = { index, user };
