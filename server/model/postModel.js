const mongoose = require("mongoose");

const postDataModel = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "This item is required"],
  },
  message: {
    type: String,
    required: [true, "This item is required"],
  },
});

const Post = mongoose.model("post-models", postDataModel);

module.exports = Post;
