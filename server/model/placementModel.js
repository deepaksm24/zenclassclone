const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    batch:{
      type: String,
      required: true,
      
    },
    company: {
        type: String,
        required: true,
      },
  
      ctc:{
        type: String,
        required: false,
        default: "Not Disclosed"
      },
      name: {
        type: String,
        required: true,
      },
  
      placed:{
        type: String,
        required: true,
        
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

module.exports = mongoose.model("placement", placeSchema);
