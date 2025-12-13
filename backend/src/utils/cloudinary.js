import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinary.v2.uploader
  .upload(
    "my_image.jpg",
    { public_id: "sample_image" },
    function (error, result) {
      if (error) {
        console.error("Error uploading to Cloudinary:", error);
      }
    }
  )
  .then((result) => console.log(result));
