const { errorLog } = require("../../common/messages");
const postOrm = require("../orm/post");

const createPost = async (post) => {
  try {
    const result = await postOrm.createPost(post);
    // console.log(result);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const likePost = async (postId, userId) => {
  try {
    const result = await postOrm.likePost(postId, userId);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const removeLikeFromPost = async (postId, userId) => {
  try {
    const result = await postOrm.removeLikeFromPost(postId, userId);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const editPost = async (post) => {
  try {
    const result = await postOrm.editPost(post);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const commentPost = async (post) => {
  try {
    const result = await postOrm.commentOnPost(post);
    // console.log("Analysis value : ", analysis);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const getTrendingPosts = async (post) => {
  try {
    const result = await postOrm.getTrendingPosts(post);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

module.exports = {
  likePost,
  removeLikeFromPost,
  createPost,
  editPost,
  commentPost,
  getTrendingPosts,
};
