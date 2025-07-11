const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: {
    type: String,
    required: true,
    match: /^[6-9]\d{9}$/,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
  },
});

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    users: {
      type: [userSchema],
      validate: [
        (arr) => arr.length > 0 && arr.length <= 4,
        "{PATH} must have 1-4 users",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", todoSchema);
