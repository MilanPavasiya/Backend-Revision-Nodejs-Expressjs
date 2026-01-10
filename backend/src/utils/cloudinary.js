import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (filePath, options = {}) => {
  try {
    if (!filePath) return null;

    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
      folder: options.folder || "uploads",
      public_id: options.public_id,
      overwrite: options.overwrite ?? true,
    });

    fs.existsSync(filePath) && fs.unlinkSync(filePath);

    return {
      url: response.secure_url,
      public_id: response.public_id,
    };
  } catch (error) {
    console.error("Cloudinary upload failed:", error.message);
    fs.existsSync(filePath) && fs.unlinkSync(filePath);
    return null;
  }
};

const deleteFromCloudinary = async (public_id) => {
  if (!public_id) return null;

  await cloudinary.uploader.destroy(public_id);
};

export { uploadToCloudinary, deleteFromCloudinary };
