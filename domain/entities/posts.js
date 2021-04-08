const mongoose = require("mongoose");

const Posts = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: [true, "Every post should have a post ID"],
    },
    userId: {
      type: String,
      required: [true, "User UID is not present"],
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    genres: {
      type: Array,
      default: [],
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: {
      type: Array,
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },
    sentiment_score: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Post", Posts);
