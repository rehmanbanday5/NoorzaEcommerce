import { v2 as cloudinary } from "cloudinary";
import instagramModel from "../models/instagramModel.js";

// ADD INSTAGRAM POST
const addInstagramPost = async (req, res) => {
  try {
    const { instagramUrl, caption } = req.body;

    if (!req.file) {
      return res.json({
        success: false,
        message: "Please upload an image",
      });
    }

    if (!instagramUrl) {
      return res.json({
        success: false,
        message: "Instagram post URL is required",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "noorza/instagram",
    });

    const post = new instagramModel({
      image: result.secure_url,
      instagramUrl,
      caption,
      date: Date.now(),
    });

    await post.save();

    res.json({
      success: true,
      message: "Instagram post added successfully",
      post,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// LIST INSTAGRAM POSTS
const listInstagramPosts = async (req, res) => {
  try {
    const posts = await instagramModel.find({}).sort({ date: -1 });

    res.json({
      success: true,
      posts,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// REMOVE INSTAGRAM POST
const removeInstagramPost = async (req, res) => {
  try {
    const { id } = req.body;

    await instagramModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Instagram post removed successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addInstagramPost, listInstagramPosts, removeInstagramPost };
