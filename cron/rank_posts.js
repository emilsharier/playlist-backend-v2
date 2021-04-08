const { errorLog } = require("../common/messages");
const Post = require("../domain/entities/posts");

const rank_post = async (properties) => {
  try {
    const result = await Post.updateMany();
  } catch (ex) {
    errorLog(ex);
    return ex;
  }
};

module.exports = { rank_post };
