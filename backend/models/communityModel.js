const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    ownerName: {
      type: String,
      required: true,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Community", communitySchema);
