import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";


const ALLOWED_SIZES = ['Small (36-38")', 'Medium (38-40")', 'Large (40-42")'];

const validateSizes = (sizesString) => {
  try {
    const sizes = JSON.parse(sizesString);

    if (
      !Array.isArray(sizes) ||
      sizes.length === 0 ||
      sizes.some((size) => !ALLOWED_SIZES.includes(size)) ||
      new Set(sizes).size !== sizes.length
    ) {
      return null;
    }

    return sizes;
  } catch {
    return null;
  }
};


// ================= ADD PRODUCT =================

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      sizes,
      bestseller,
    } = req.body;

    const validatedSizes = validateSizes(sizes);

    if (!validatedSizes) {
      return res.status(400).json({
        success: false,
        message: "Please select valid product sizes.",
      });
    }

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
    const result = await cloudinary.uploader.upload(item.path, {
      resource_type: "image",
      folder: "Noorza",
    });

        return result.secure_url;
      }),
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      bestseller: bestseller === "true" ? true : false,
      sizes: validatedSizes,
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);

    await product.save();

    res.json({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LIST PRODUCTS =================

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= REMOVE PRODUCT =================

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);

    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= SINGLE PRODUCT =================

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= UPDATE PRODUCT =================

const updateProduct = async (req, res) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      sizes,
      bestseller,
      existingImages,
    } = req.body;

    const validatedSizes = validateSizes(sizes);

    if (!validatedSizes) {
      return res.status(400).json({
        success: false,
        message: "Please select valid product sizes.",
      });
    }

    if (!id) {
      return res.json({
        success: false,
        message: "Product ID is required",
      });
    }

    const product = await productModel.findById(id);

    if (!product) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    // Existing images sent by frontend
    let oldImages = [];

    if (existingImages) {
      oldImages = JSON.parse(existingImages);
    } else {
      oldImages = product.image || [];
    }

    // Uploaded files
    const files = req.files || {};

    const file1 = files.image1?.[0];
    const file2 = files.image2?.[0];
    const file3 = files.image3?.[0];
    const file4 = files.image4?.[0];

    const uploadedFiles = [file1, file2, file3, file4];

    const finalImages = [];

    for (let i = 0; i < 4; i++) {
      const newFile = uploadedFiles[i];
      const oldImage = oldImages[i];

      if (newFile) {
       const result = await cloudinary.uploader.upload(newFile.path, {
         resource_type: "image",
         folder: "Noorza",
       });

        finalImages.push(result.secure_url);
      } else if (oldImage) {
        finalImages.push(oldImage);
      }
    }

    const updatedProduct = {
      name,
      description,
      price: Number(price),
      category,
      sizes: validatedSizes,
      bestseller: bestseller === "true",
      image: finalImages,
    };

    await productModel.findByIdAndUpdate(id, updatedProduct);

    res.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error);

    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
  updateProduct,
};