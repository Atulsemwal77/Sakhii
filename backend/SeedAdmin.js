const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/AdminModal");
require("dotenv").config();

const createAdmin = async () => {
  try {
    // 1️⃣ Connect to DB
    await mongoose.connect(process.env.MONGO_URI, {
      dbName:"Sakhi",
    });

    console.log("📌 DB Connected");

    const email = "sakhiiAdmin@gmail.com";
    const plainPassword = "sakhii@123";

    // 2️⃣ Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      return process.exit();
    }

    // 3️⃣ Hash password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // 4️⃣ Create admin
    const admin = new Admin({
      email,
      password: hashedPassword,
      name: "Admin",
    });

    await admin.save();
    console.log("🎉 Admin created successfully");

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    process.exit();
  }
};

createAdmin();
