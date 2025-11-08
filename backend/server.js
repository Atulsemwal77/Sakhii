const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const donation_route = require("./routes/donation")
const community_route = require("./routes/communityRoute")
const comment_route = require('./routes/commentRoute')

dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174" , "http://localhost:5175"],
    credentials: true,
  })
);

app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/donations' , donation_route)
app.use('/api/community' , community_route)
app.use('/api/comment' , comment_route)

// Home route (public)
app.get("/", (req, res) => {
  res.send("Welcome to Home Page (Public)");
});

const PORT = process.env.PORT || 5999;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
