const jwt = require("jsonwebtoken");
const config = require("../config/jwt_config");
const asyncHandler = require("./async_handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    next("No token provided");
  } else {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        next(err);
      }
      req.userId = decoded.userId;
      next();
    });
  }
});

module.exports = { verifyToken };
