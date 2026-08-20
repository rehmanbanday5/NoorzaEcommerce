import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = () => {
  const cloudName = process.env.CLOUDINARY_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_SECRET_KEY;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error("❌ Cloudinary credentials are missing!");
    return;
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  console.log("✅ Cloudinary configured successfully");
  console.log("Cloud Name:", cloudName);
  console.log("API Key loaded:", !!apiKey);
  console.log("Secret loaded:", !!apiSecret);
};

export default connectCloudinary;
