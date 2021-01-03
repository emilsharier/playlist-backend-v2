const send = require("../common/send_response");
const asyncHandler = require("../middlewares/async_handler");

const signIn = asyncHandler(async (req, res, next) => {
  send(res, 201, { data: "Hello" });
});

const signUp = asyncHandler(async (req, res, next) => {});

module.exports = { signIn, signUp };
