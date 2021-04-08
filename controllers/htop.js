const asyncHandler = require("../middlewares/async_handler");
const htopService = require("../domain/services/htop");
const send = require("../common/send_response");

exports.htop = asyncHandler(async (req, res, next) => {
  const result = await htopService.htop();
  if (result.stderr) send(res, 500, result.stderr);
  else send(res, 201, result);
});
