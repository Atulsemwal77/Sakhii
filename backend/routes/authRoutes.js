const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// 🟢 SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // create jwt
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // send token as HttpOnly cookie 🔥
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true if HTTPS
      sameSite: "strict",
      maxAge: 60 * 60 * 1000 // 1h
    });

    res.json({ 
      message: "Login successful", 
      user: { id: user._id, name: user.name, email: user.email } 
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// 🟢 PROTECTED ROUTE EXAMPLE
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome User ${req.user.id}` });
});

// Check login status
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json({ user });
});

// Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});


module.exports = router;
