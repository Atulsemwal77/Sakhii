const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comment : String, 
    name : String
}, { timestamps: true })

module.exports = mongoose.model("Comment" , commentSchema)


