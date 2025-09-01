const mongoose = require("mongoose")

const communitySchema = mongoose.Schema({
    title  : String 
})

module.exports = mongoose.model("Community" , communitySchema)