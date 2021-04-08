const send = require("../common/send_response");
const PostOrm = require("../domain/orm/post");
const asyncHandler = require("./async_handler");

exports.checkDuplicateLike = asyncHandler(async (req, res, next) => {
  const { postId, userId } = req.body;
  console.log("Checking duplicate like");
  const properties = { postId: postId, userId: userId };
  const result = await PostOrm.checkDuplicateLike(properties);
  if (result.length !== 0)
    send(res, 403, { message: "You have already liked this post" });
  else next();
});
