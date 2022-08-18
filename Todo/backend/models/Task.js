const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date,
  },
  done: {
    type: String,
    default: "no",
  },
});

module.exports = mongoose.model("todo", TodoSchema);
