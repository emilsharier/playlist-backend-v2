const asyncHandler = require("../middlewares/async_handler");
const postService = require("../domain/services/post");
const send = require("../common/send_response");

const createPost = asyncHandler(async (req, res, next) => {
  const result = await postService.createPost(req.body);
  // console.log(result);
  send(res, 201, result);
});

const editPost = asyncHandler(async (req, res, next) => {
  // const result = await postService.editPost(req.body);
});

const likePost = asyncHandler(async (req, res, next) => {
  const { postId, userId } = req.body;
  const result = await postService.likePost(postId, userId);
  send(res, 201, result);
});

const removeLikeFromPost = asyncHandler(async (req, res, next) => {
  const { postId, userId } = req.body;
  const result = await postService.removeLikeFromPost(postId, userId);
  send(res, 201, result);
});

const deletePost = asyncHandler(async (req, res, next) => {});

const commentOnPost = asyncHandler(async (req, res, next) => {
  const { comment, postId, userId } = req.body;
  const post = {
    comment: comment,
    postId: postId,
    userId: userId,
  };

  const result = await postService.commentPost(post);
  if (result) send(res, 201, result);
  else send(res, 500, {});
});

const getTrendingPosts = asyncHandler(async (req, res, next) => {
  const { sentiment_score = 0 } = req.body;
  const post = { sentiment_score: sentiment_score };

  const result = await postService.getTrendingPosts(post);

  if (result) send(res, 201, result);
  else send(res, 500, {});
});

module.exports = {
  createPost,
  editPost,
  likePost,
  removeLikeFromPost,
  deletePost,
  commentOnPost,
  getTrendingPosts,
};
