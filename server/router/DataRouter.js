const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const {
  postNewFormData,
  getCityInfo,
} = require("../controller/dataController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.route("/formdatapost").post(upload.single("image"), postNewFormData);

router.route("/getCityinfo").post(getCityInfo);

module.exports = router;
