const jwt = require("jsonwebtoken");

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

module.exports = isTokenValid;
