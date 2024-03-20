const asynchandler = require("express-async-handler");
const Post = require("../model/postModel");

const getPosts = asynchandler(async (req, res) => {
  const posts = await Post.find();

  if (posts) {
    res.status(200).json(posts);
  } else {
    res.status(404).json({ message: error.message });
  }
});
////////////////////////////////////////////////
///*******************************************//
///////////////////////////////////////////////

const newPosts = asynchandler(async (req, res) => {
  const { title, message } = req.body;

  console.log(req.body);
  const result = await Post.create({
    title,
    message,
  });

  try {
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: "error" });
    console.log(error);
  }
});
////////////////////////////////////////////////
///*******************************************//
///////////////////////////////////////////////

module.exports = {
  getPosts,
  newPosts,
};
