const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");


// Create a new donation
router.post("/", async (req, res) => {
    try {
        const donation = new Donation(req.body);
        await donation.save();
        res.status(201).json({ success: true, donation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all donations (optional)
router.get("/", async (req, res) => {
    try {
        const donations = await Donation.find();
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
