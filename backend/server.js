const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");
const path = require('path');

const donation_route = require("./routes/donation");
const community_route = require("./routes/communityRoute");
const comment_route = require("./routes/commentRoute");
const auth_route = require("./routes/authRoutes");
const admin_Routes = require('./routes/AdminRoutes')
const blog_route = require("./routes/blogRoute")

dotenv.config();
const app = express();

// MIDDLEWARES
app.use('/uploads', express.static(path.join(__dirname, "config", 'uploads')));
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
    ],
    credentials: true,
  })
);

// DATABASE CONNECT
connectDB();

// ROUTES
app.use("/api/auth", auth_route);
app.use('/api/admin', admin_Routes)
app.use("/api/donations", donation_route);
app.use("/api/community", community_route); 
app.use("/api/comment", comment_route);
app.use('/api/blogs', blog_route)

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

const PORT = process.env.PORT || 5999;
app.listen(PORT, () =>
  console.log(`🚀 Server running successfully on port ${PORT}`)
);
