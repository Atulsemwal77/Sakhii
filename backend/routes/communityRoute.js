const express = require("express");
const auth = require("../middleware/authMiddleware");
const Community = require("../models/communityModel");
const Comment = require("../models/commentModel");

const router = express.Router();

// ADD COMMUNITY
router.post("/add", auth, async (req, res) => {
  try {
    const { title } = req.body;

    const community = await Community.create({
      title,
      ownerId: req.user._id,
      ownerName: req.user.name,
    });

    res.status(201).json({ success: true, community });
  } catch (err) {
    console.error("ADD COMMUNITY ERROR =>", err);
    res.status(500).json({ message: err.message });
  }
});

// GET ALL COMMUNITIES
router.get("/", async (req, res) => {
  try {
    const data = await Community.find()
      .populate("comments")
      .populate("ownerId", "name _id")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("FETCH COMMUNITY ERROR =>", err);
    res.status(500).json({ message: err.message });
  }
});

// UPDATE COMMUNITY
router.put("/:id", auth, async (req, res) => {
  try {
    const { title } = req.body;
    const community = await Community.findById(req.params.id);

    if (!community)
      return res.status(404).json({ message: "Community not found" });

    if (community.ownerId.toString() !== req.user._id)
      return res.status(403).json({ message: "Unauthorized" });

    community.title = title;
    await community.save();

    res.json({ success: true, community });
  } catch (err) {
    console.error("UPDATE COMMUNITY ERROR =>", err);
    res.status(500).json({ message: err.message });
  }
});

// DELETE COMMUNITY
router.delete("/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    // console.log("DELETE REQUEST FOR COMMUNITY =>", id);

    const community = await Community.findById(id);

    if (!community)
      return res.status(404).json({ message: "Community not found" });

    if (!community.ownerId)
      return res.status(400).json({ message: "Corrupted community: ownerId missing" });

    if (community.ownerId.toString() !== req.user._id)
      return res.status(403).json({ message: "Unauthorized delete" });

    // Filter comments safely
    const validComments = community.comments.filter(
      (cid) => cid && cid.toString().match(/^[0-9a-fA-F]{24}$/)
    );

    // console.log("VALID COMMENTS TO DELETE =>", validComments);

    if (validComments.length > 0) {
      await Comment.deleteMany({ _id: { $in: validComments } });
    }

    await community.deleteOne();

    res.json({ success: true, message: "Community deleted" });
  } catch (err) {
    console.error("❌ DELETE ERROR =>", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
