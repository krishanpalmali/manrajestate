import express from "express";
import Property from "../model/property.model.js";
import { verifyAdmin } from "../utils/verifyadmin.js";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

/*
Frontend se JSON me image base64 aayegi:
{
  title,
  price,
  location,
  description,
  image: "data:image/png;base64,...."
}
*/

// ================= CREATE PROPERTY =================
router.post("/create", verifyAdmin, async (req, res) => {
  try {
    const { title, price, location, description, image } = req.body;

    if (!title || !price || !location || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(image, {
      folder: "properties",
    });

    const property = new Property({
      title,
      price,
      location,
      description,
      image: uploadResult.secure_url,
    });

    await property.save();

    res.status(201).json(property);
  } catch (error) {
    console.log("Create property error:", error);
    res.status(500).json({ message: "Property create failed" });
  }
});

// ================= GET ALL PROPERTIES =================
router.get("/all", async (req, res) => {
  try {
    const data = await Property.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    console.log("Fetch error:", error);
    res.status(500).json({ message: "Fetch failed" });
  }
});

// ================= DELETE PROPERTY =================
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // Cloudinary se image delete
    const imageUrl = property.image;
    const publicId = imageUrl
      .split("/")
      .slice(-2)
      .join("/")
      .split(".")[0]; 
    // Example: properties/abc123xyz

    await cloudinary.uploader.destroy(publicId);

    // MongoDB se delete
    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.log("Delete error:", error);
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
