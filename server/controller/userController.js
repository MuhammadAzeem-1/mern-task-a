const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../model/userModel");

const secret = "test";

// -----------------------
// SignIn for THe User
// -----------------------

const signin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Checking the user if did not exit
  const result = await User.findOne({ email });

  if (!result) return res.status(404).json({ message: "User Not exist" });

  if (result && (await bcrypt.compare(password, result.password))) {
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      secret,
      { expiresIn: 60 * 60 }
    );

    res.status(200).json({ result, token });
  } else {
    res.status(404).json({ message: "Invalid Credentials" });
  }
});

// -----------------------
// SignUp for THe  New User
// -----------------------

const signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // checking for user
  const olderUser = await User.findOne({ email });

  if (olderUser) return res.status(404).json({ message: "User Already Exist" });

  // hashing the password
  const hashesdPassword = await bcrypt.hash(password, 12);

  /// store in database
  const result = await User.create({
    email,
    password: hashesdPassword,
    name: name,
  });

  // genrating the token
  const token = jwt.sign(
    {
      email: result.email,
      id: result._Id,
    },
    secret,
    { expiresIn: 60 * 60 }
  );

  res.status(200).json({ result, token });
});

module.exports = { signin, signUp };
