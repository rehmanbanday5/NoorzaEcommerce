import bcrypt from "bcrypt";
import adminModel from "../models/adminModel.js";

const createAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL.toLowerCase().trim();

    const existingAdmin = await adminModel.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    const admin = new adminModel({
      name: "Noorza Admin",
      phone: "",
      email,
      password: hashedPassword,
    });

    await admin.save();

    console.log("Admin account created successfully");
  } catch (error) {
    console.log("Admin creation error:", error);
  }
};

export default createAdmin;
