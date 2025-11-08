const express = require("express");
const Community = require("../models/communityModel");
const Comment = require("../models/commentModel");
const router = express.Router();

// Add comment to a community
router.post("/:communityId", async (req, res) => {
  try {
    const { communityId } = req.params;

    // 1. Create comment
    const comment = new Comment(req.body);
    const savedComment = await comment.save();

    // 2. Push comment into community
    await Community.findByIdAndUpdate(
      communityId,
      { $push: { comments: savedComment._id } }, // plural!
      { new: true }
    );

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment: savedComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding comment",
      error: error.message,
    });
  }
});

module.exports = router;
