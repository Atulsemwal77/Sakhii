const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    amount: { type: Number, required: true },
    location: { type: String },
    message: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Donation", DonationSchema);
