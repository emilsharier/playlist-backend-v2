const send = require("../common/send_response");
const asyncHandler = require("../middlewares/async_handler");

const AuthService = require("../domain/services/auth");

const signIn = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = { email: email, password: password };
  const result = await AuthService.signIn(user);
  if (result.status) {
    send(res, 201, result.data);
  } else {
    send(res, 403, {});
  }
});

const signUp = asyncHandler(async (req, res, next) => {
  const { email, username, name, password } = req.body;
  const user = {
    email: email,
    username: username,
    name: name,
    password: password,
  };
  const result = await AuthService.signUp(user);
  if (result.status) {
    send(res, 201, result.data.userId);
  } else {
    send(res, 403, {});
  }
});

module.exports = { signIn, signUp };
