const mongoose = require("mongoose");

const userDataModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This item is required"],
  },
  email: {
    type: String,
    required: [true, "This item is required"],
  },
  password: {
    type: String,
    required: [true, "This item is required"],
  },
});

const User = mongoose.model("user-models", userDataModel);

module.exports = User;
