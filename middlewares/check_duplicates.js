const asyncHandler = require("./async_handler");

const User = require("../domain/entities/user");
const send = require("../common/send_response");

const checkForDuplicateEntry = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const filter = { email: email };
  const result = await User.findOne(filter);
  if (result && result.email === email) send(res, 401, result);
  else next();
});

module.exports = { checkForDuplicateEntry };
