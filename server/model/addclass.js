const mongoose = require("mongoose");

const addclassSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    contents: {
      type: String,
      required: true,
    },
    preread: {
      type: String,
      required: true,
    },

    Time: {
      type: String,
      required: true,
    },
    additionaldate: {
      type: Date,
      required: true,
    },

    batch: {
      type: String,
      required: true,
      default: false,
    },

    url: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("additionalclass", addclassSchema);
