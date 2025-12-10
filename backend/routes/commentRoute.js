const express = require("express");
const auth = require("../middleware/authMiddleware");
const Comment = require("../models/commentModel");
const Community = require("../models/communityModel");

const router = express.Router();

// ADD COMMENT (PROTECTED)
router.post("/:id", auth, async (req, res) => {
  try {
    const { comment } = req.body;
    const { id } = req.params;

    const cm = await Comment.create({
      comment,
      userId: req.user._id,
      name: req.user.name,
    });

    await Community.findByIdAndUpdate(id, {
      $push: { comments: cm._id },
    });

    res.status(201).json({ success: true, comment: cm });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// EDIT COMMENT (ONLY CREATOR)
router.put("/:commentId", auth, async (req, res) => {
  try {
    const cm = await Comment.findById(req.params.commentId);

    if (!cm) return res.status(404).json({ message: "Comment not found" });

    if (cm.userId.toString() !== req.user._id)
      return res.status(403).json({ message: "Not allowed" });

    cm.comment = req.body.comment;
    await cm.save();

    res.json({ success: true, comment: cm });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
