const { errorLog } = require("../../common/messages");
const uniqid = require("uniqid");
const { analyseText } = require("../services/sentiment_analyser");

const Post = require("../entities/posts");

const likePost = async (postId, userId) => {
  try {
    const filter = { postId: postId };
    const result = await Post.findOneAndUpdate(filter, {
      $inc: {
        likes: 1,
      },
      $push: {
        likedBy: userId,
      },
    }).exec();
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const removeLikeFromPost = async (postId, userId) => {
  try {
    const filter = { postId: postId };
    const result = await Post.findOneAndUpdate(filter, {
      $inc: {
        postId: -1,
      },
      $pop: {
        likedBy: userId,
      },
    }).exec();
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const createPost = async (post) => {
  try {
    const { title, content, genres = [], userId } = post;
    const postId = uniqid();
    const obj = new Post({
      postId: postId,
      userId: userId,
      title: title,
      content: content,
      genres: genres,
    });
    const result = await obj.save();
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const editPost = async (post) => {
  try {
    const { postId, title, content, genres, userId } = post;
    const filter = { postId: postId };
    const updatedFields = { title: title, content: content, genres: genres };
    const result = await Post.findOneAndUpdate(filter, updatedFields);
    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const commentOnPost = async (post) => {
  try {
    const { postId, comment, userId } = post;
    const filter = { postId: postId };

    const analysis = analyseText(comment);

    const payload = {
      userId: userId,
      commentId: uniqid(),
      comment: comment,
      time: Date.now(),
      sentiment_score: analysis,
    };

    let result = await Post.findOneAndUpdate(filter, {
      $push: {
        comments: payload,
      },
    });

    console.log("Data after comment API is called");
    console.log(result);

    let score = result.sentiment_score;
    score = score + analysis;

    let updatedScore = { sentiment_score: score };
    result = await Post.findOneAndUpdate(filter, updatedScore);

    return result;
  } catch (ex) {
    errorLog(ex);
  }
};

const getLikeStatus = async (properties) => {
  try {
    const { postId, userId } = properties;
    const filter = { postId: postId, likedBy: { $in: [userId] } };
    const result = await Post.find(filter);
    console.log("Getting like status:");
    console.log(result);
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

const getTrendingPosts = async (properties) => {
  try {
    const { sentiment_score = 0 } = properties;
    const filter = {};
    const result = await Post.find({
      sentiment_score: { $gte: sentiment_score },
    })
      .limit(10)
      .sort({ sentiment_score: "desc" });
    return result;
  } catch (ex) {
    errorLog(ex);
    return false;
  }
};

// ORM for middlewares
const checkDuplicateLike = async (properties) => {
  try {
    const { postId, userId } = properties;
    const filter = { postId: postId, likedBy: { $in: [userId] } };
    const result = await Post.find(filter);
    console.log("Duplicate like:");
    console.log(result);
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
  commentOnPost,
  checkDuplicateLike,
  getLikeStatus,
  getTrendingPosts,
};
