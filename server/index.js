const express = require("express");
const connectDb = require("./config/connectDb");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./router/user");
const postRouter = require("./router/post");

connectDb();
const app = express();
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

app.use("/user", userRoute);
app.use("/user", postRouter);

app.listen(port, () => {
  console.log("Server is Connected");
});
