const express = require("express");
const Community = require("../models/communityModel");
const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const community = new Community(req.body);
    await community.save();

    res
      .status(200)
      .json({ success: true, message: "Community Added" }, community);
  } catch (error) {
    res
      .status(200)
      .json({ success: false, message: " faild to add Community " });
    console.log(error);
  }
});


router.get("/", async (req, res) => {
  try {
    const getCommunity = await Community.find();

    res.status(200).json({
      success: true,
      message: "Getting community",
      data: getCommunity,
    });
  } catch (error) {
    console.error("Error fetching community:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch community",
      error: error.message,
    });
  }
});


module.exports = router;
