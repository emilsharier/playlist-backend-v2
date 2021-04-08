const mongoose = require("mongoose");

const Users = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID required"],
    },
    username: {
      type: String,
      required: [true, "Invalid username"],
    },
    name: {
      type: String,
      required: [true, "Invalid name"],
    },
    email: {
      type: String,
      required: [true, "Invalid email"],
    },
    password: {
      type: String,
      required: [true, "Invalid password"],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("User", Users);
