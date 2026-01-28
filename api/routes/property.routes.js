import express from "express";
import { upload } from "../utils/upload.js";
import Property from "../model/property.model.js";
import fs from "fs";
import path from "path";
import { verifyAdmin } from "../utils/verifyadmin.js";

const router = express.Router();

// CREATE PROPERTY (normally admin only hona chahiye)
router.post("/create", verifyAdmin, upload.single("image"), async (req, res) => {
  try {
    const property = new Property({
      title: req.body.title,
      price: req.body.price,
      location: req.body.location,
      description: req.body.description,
      image: `/uploads/${req.file.filename}`,
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Property create failed" });
  }
});

// GET ALL PROPERTIES (sab ke liye open)
router.get("/all", async (req, res) => {
  try {
    const data = await Property.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Fetch failed" });
  }
});

// DELETE PROPERTY + IMAGE (ONLY ADMIN)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    // image ka full path
    const imagePath = path.join(process.cwd(), property.image);

    // image delete
    fs.unlink(imagePath, (err) => {
      if (err) console.log("Image delete error:", err);
    });

    // DB se delete
    await Property.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Property deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Delete failed" });
  }
});

export default router;
