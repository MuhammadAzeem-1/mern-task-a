const mongoose = require("mongoose");

const formDataModel = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This item is required"],
  },
  city: {
    type: String,
    required: [true, "This item is required"],
  },
  papulation: {
    type: String,
    required: [true, "This item is required"],
  },
  language: {
    type: String,
  },
  festival: {
    type: String,
    required: [true, "This item is required"],
  },
  date: {
    type: String,
    required: [true, "This item is required"],
  },

  des: {
    type: String,
    required: [true, "This item is required"],
  },
  image: {
    type: String,
    required: [true, "This item is required"],
  },
});

const FormData = mongoose.model("formData-models", formDataModel);

module.exports = FormData;
