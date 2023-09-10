const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneno: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: String,
      required: true,
      default: false,
    },
    batch:{
      type: String,
      required: true,
      default: "B43",
    },
    course:{
      type: String,
      required: true,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
