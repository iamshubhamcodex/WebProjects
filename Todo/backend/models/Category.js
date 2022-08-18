const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "id",
  },
  name: {
    type: String,
    unique: true,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("category", CategorySchema);
