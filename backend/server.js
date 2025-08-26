const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const donation_route = require("./routes/donation")

dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",  // frontend URL
  credentials: true                 // allow cookies
}));
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/donations' , donation_route)

// Home route (public)
app.get("/", (req, res) => {
  res.send("Welcome to Home Page (Public)");
});

const PORT = process.env.PORT || 5999;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
