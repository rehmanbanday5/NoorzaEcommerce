import express from "express";

import {
  addInstagramPost,
  listInstagramPosts,
  removeInstagramPost,
} from "../controllers/instagramController.js";

import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const instagramRouter = express.Router();

// ADD
instagramRouter.post(
  "/add",
  adminAuth,
  upload.single("image"),
  addInstagramPost,
);

// LIST
instagramRouter.get("/list", listInstagramPosts);

// REMOVE
instagramRouter.post("/remove", adminAuth, removeInstagramPost);

export default instagramRouter;
