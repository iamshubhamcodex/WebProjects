const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/todo";

const connectToMongo = () => {
  mongoose.connect(mongoURI, async () => {
    console.log("connected to mongo successfully");
  });
};
module.exports = connectToMongo;
