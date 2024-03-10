const mongoose = require("mongoose");

const connectDb = () => {
  try {
    const connect = mongoose.connect(`mongodb://0.0.0.0:27017/mern-task`);

    if (connect) {
      console.log("database is connected");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
