import express from "express";
import Buy from "../model/Buy.model.js";
import { verifyAdmin } from "../utils/verifyadmin.js";

const router = express.Router();

// CREATE buy request (client side) – public
router.post("/create", async (req, res) => {
  try {
    const newBuy = new Buy(req.body);
    const savedBuy = await newBuy.save();
    res.status(201).json(savedBuy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all buy requests (Admin only)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    console.log("Admin verified:", req.user);  // 🔥 add this
    const buys = await Buy.find().sort({ createdAt: -1 });
    res.status(200).json(buys);
  } catch (error) {
    console.error("Buy fetch error:", error);
    res.status(500).json({ message: error.message });
  }
});

// DELETE buy request (Admin only)
router.delete("/:id", verifyAdmin, async (req, res) => {
  try {
    const deletedBuy = await Buy.findByIdAndDelete(req.params.id);

    if (!deletedBuy) {
      return res.status(404).json({
        success: false,
        message: "Buy request not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Buy request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
