const mongoose = require("mongoose");

const mockSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    interviewername:{
      type: String,
      required: true,
      
    },
    attended: {
        type: String,
        required: true,
      },
  
      comment: {
        type: String,
        required: true,
      },
  
      logicalscore:{
        type: String,
        required: true,
        
      }, reactscore:{
        type: String,
        required: true,
        
      }, mysqlscore:{
        type: String,
        required: true,
        
      }, mongodbscore:{
        type: String,
        required: true,
        
      },nodejsscore:{
        type: String,
        required: true,
        
      },url:{
        type: String,
        required: true,
        
      }, interviewdate: {
        type: Date,
        required: true,
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("mockinterview", mockSchema);
