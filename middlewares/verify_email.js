const send = require("../common/send_response");
const User = require("../domain/entities/user");
const asyncHandler = require("./async_handler");

const Auth = require("../domain/orm/auth");

const verifyEmail = asyncHandler(async (req, res, next) => {
  let email = "";

  if (req.method === "POST") email = req.body.email;
  else email = req.params.email;

  const user = { email: email };
  let result = await Auth.checkExistenceOfEmail(user);

  if (result.status) {
    req.user = result.data;
    next();
  } else {
    send(res, 403, {
      message: "Can't find an account with this email id",
    });
  }
});

module.exports = { verifyEmail };
