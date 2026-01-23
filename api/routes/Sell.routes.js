import express from "express";
import Sell from "../model/Sell.model.js";
import { verifyAdmin } from "../utils/verifyadmin.js";

const router = express.Router();

// CREATE sell request (client side – public)
router.post("/create", async (req, res) => {
  try {
    const newSell = new Sell(req.body);
    const savedSell = await newSell.save();
    res.status(201).json(savedSell);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all sell requests (Admin only)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    console.log("Admin verified:", req.user);  // 🔥 add this
    const sells = await Sell.find().sort({ createdAt: -1 });
    res.status(200).json(sells);
  } catch (error) {
    console.error("Sell fetch error:", error);
    res.status(500).json({ message: error.message });
  }
});

// DELETE sell request (Admin only)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const deletedSell = await Sell.findByIdAndDelete(req.params.id);

    if (!deletedSell) {
      return res.status(404).json({
        success: false,
        message: "Sell request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Sell request deleted successfully from database",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
