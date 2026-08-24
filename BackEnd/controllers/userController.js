import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import adminModel from "../models/adminModel.js";

// ===============================
// CREATE USER TOKEN
// ===============================

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// ===============================
// USER LOGIN
// ===============================

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User Doesn't Exists",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);

      return res.json({
        success: true,
        token,
      });
    }

    return res.json({
      success: false,
      message: "Invalid Credentials",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// USER REGISTER
// ===============================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({
        success: false,
        message: "User Already Exists",
      });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid Email Format",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password is not strong enough",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// ADMIN LOGIN
// ===============================

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    let admin = await adminModel.findOne({
      email: normalizedEmail,
    });

    // ==========================================
    // FIRST TIME ADMIN SETUP
    // If MongoDB admin doesn't exist,
    // create it from .env credentials
    // ==========================================

    if (!admin) {
      if (
        normalizedEmail !== process.env.ADMIN_EMAIL.toLowerCase().trim() ||
        password !== process.env.ADMIN_PASSWORD
      ) {
        return res.json({
          success: false,
          message: "Invalid Credentials",
        });
      }

      const salt = await bcrypt.genSalt(10);

      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_PASSWORD,
        salt,
      );

      admin = await adminModel.create({
        name: "Noorza Admin",
        phone: "",
        email: normalizedEmail,
        password: hashedPassword,
      });
    } else {
      // ==========================================
      // NORMAL LOGIN FROM MONGODB
      // ==========================================

      const isMatch = await bcrypt.compare(password, admin.password);

      if (!isMatch) {
        return res.json({
          success: false,
          message: "Invalid Credentials",
        });
      }
    }

    // ==========================================
    // CREATE ADMIN TOKEN
    // ==========================================

    const token = jwt.sign(
      {
        id: admin._id,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// ===============================
// CHANGE ADMIN PASSWORD
// ===============================

const changeAdminPassword = async (req, res) => {
  try {
    const { current, newPassword } = req.body;

    if (!current || !newPassword) {
      return res.json({
        success: false,
        message: "Current and new password are required",
      });
    }

    if (newPassword.length < 8) {
      return res.json({
        success: false,
        message: "New password must be at least 8 characters",
      });
    }

    const admin = await adminModel.findById(req.adminId);

    if (!admin) {
      return res.json({
        success: false,
        message: "Admin account not found",
      });
    }

    // Check current password

    const isMatch = await bcrypt.compare(current, admin.password);

    if (!isMatch) {
      return res.json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Hash new password

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Save new password

    admin.password = hashedPassword;

    await admin.save();

    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { loginUser, registerUser, adminLogin, changeAdminPassword };
