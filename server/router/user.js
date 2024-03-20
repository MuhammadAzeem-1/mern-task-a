const express = require("express");
const { signin, signUp } = require("../controller/userController");

const router = express.Router();

router.post("/signup", signUp);

router.post("/signin", signin);

module.exports = router;
