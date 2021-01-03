const asyncHandler = require("../middlewares/async_handler");

const newPost = asyncHandler(async (req, res, next) => {});

const editPost = asyncHandler(async (req, res, next) => {});

const likePost = asyncHandler(async (req, res, next) => {});

const deletePost = asyncHandler(async (req, res, next) => {});

module.exports = { newPost, editPost, likePost, deletePost };
