import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  const cloudName = process.env.CLOUDINARY_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_SECRET_KEY;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error("Cloudinary credentials are missing. Check BackEnd/.env for CLOUDINARY_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_SECRET_KEY.");
    return;
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  console.log("Cloudinary connected. Cloud name:", cloudName, "| API Key loaded:", !!apiKey, "| Secret loaded:", !!apiSecret);
};

export default connectCloudinary;

