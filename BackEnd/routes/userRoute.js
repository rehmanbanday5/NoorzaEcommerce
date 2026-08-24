import express from "express";

import {
  loginUser,
  registerUser,
  adminLogin,
  changeAdminPassword,
} from "../controllers/userController.js";

import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.post("/admin", adminLogin);

userRouter.post("/admin/change-password", adminAuth, changeAdminPassword);

export default userRouter;
