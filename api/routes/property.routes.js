import express from "express";
import Property from "../model/property.model.js";
import { verifyAdmin } from "../utils/verifyadmin.js";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";

const router = express.Router();

/* ================= CREATE PROPERTY ================= */
router.post(
  "/create",
  verifyAdmin,                // 🔥 first check admin
  upload.single("image"),     // 🔥 then upload
  async (req, res) => {
    try {
      const { title, price, location, description } = req.body;

      if (!title || !price || !location || !description || !req.file) {
        return res.status(400).json({ message: "All fields are required" });
      }

      // Upload image to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "properties" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.end(req.file.buffer);
      });

      const property = new Property({
        title,
        price,
        location,
        description,
        image: uploadResult.secure_url,
      });

      await property.save();

      res.status(201).json({
        success: true,
        message: "Property created successfully",
        property,
      });
    } catch (error) {
      console.log("Create property error:", error);
      res.status(500).json({
        success: false,
        message: "Property create failed",
      });
    }
  }
);

/* ================= GET ALL PROPERTIES ================= */
router.get("/all", async (req, res) => {
  try {
    const properties = await Property.find().sort({ createdAt: -1 });
    res.status(200).json(properties);
  } catch (error) {
    console.log("Fetch properties error:", error);
    res.status(500).json({ message: "Failed to fetch properties" });
  }
});

/* ================= DELETE PROPERTY ================= */
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Cloudinary public id extract
    const imageUrl = property.image;
    const publicId = imageUrl
      .split("/")
      .slice(-2)
      .join("/")
      .split(".")[0];

    await cloudinary.uploader.destroy(publicId);
    await Property.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.log("Delete property error:", error);
    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
});

export default router;
