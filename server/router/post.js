const express = require("express");
const { newPosts, getPosts } = require("../controller/postContrller");

const router = express.Router();

router.post("/createPost", newPosts);

router.get("/getPosts", getPosts);

// router.post("/signin", signin);

module.exports = router;
