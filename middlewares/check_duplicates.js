const asyncHandler = require("./async_handler");

const send = require("../common/send_response");

const Auth = require("../domain/orm/auth");

const checkForDuplicateEntry = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const user = { email: email };
  const result = await Auth.checkExistenceOfEmail(user);
  // console.log("duplicate email : ", result);
  if (result.status && result.data.email === email)
    return send(res, 401, { status: false, data: "Email already exists" });
  else next();
});

module.exports = { checkForDuplicateEntry };
