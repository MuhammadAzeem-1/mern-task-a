const asyncHandler = require("express-async-handler");
const FormData = require("../model/formDataModel");

const postNewFormData = asyncHandler(async (req, res) => {
  const data = await FormData.create({
    name: req.body.name,
    city: req.body.city,
    papulation: req.body.papulation,
    image: req.body.image,
    description: req.body.language,
    festival: req.body.festival,
    date: req.body.date,
    des: req.body.des,
  });

  if (data) {
    res.status(200).json("Sucess");
  } else {
    res.status(401).json({ error: "*unable to register" });
  }
});

const getCityInfo = asyncHandler(async (req, res) => {
  console.log(req.body);
});

module.exports = {
  postNewFormData,
  getCityInfo,
};
