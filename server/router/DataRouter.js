const express = require("express");
const multer = require("multer");
const {
  postNewFormData,
  getCityInfo,
} = require("../controller/dataController");
const router = express.Router();

//
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.route("/formdatapost").post(upload.single("image"), postNewFormData);
router.route("/getCityinfo").post(getCityInfo);

module.exports = router;
