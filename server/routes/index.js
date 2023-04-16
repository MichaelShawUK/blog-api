var express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isTokenValid = require("../middleware/isTokenValid");

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

router.get("/protected", isTokenValid, (req, res, next) => {
  res.json({
    success: true,
    message: "Accessing protected route",
    id: req.payload.sub,
    name: req.payload.user.name,
  });
});

module.exports = router;
