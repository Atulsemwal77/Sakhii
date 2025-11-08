const mongoose = require("mongoose")

const communitySchema = mongoose.Schema({
    title  : String , 
    comments: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }
]

}, { timestamps: true })

module.exports = mongoose.model("Community" , communitySchema)