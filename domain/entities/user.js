const mongoose = require("mongoose");

const Users = new mongoose.Schema({
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
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("User", Users);
