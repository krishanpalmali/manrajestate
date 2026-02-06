import express from "express";
import Buy from "../model/Buy.model.js";
import { verifyAdmin } from "../utils/verifyadmin.js";

const router = express.Router();

/* ================= CREATE BUY REQUEST (PUBLIC) ================= */
router.post("/create", async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      propertyType,
      budget,
      location,
      description,
    } = req.body;

    // Validation
    if (!name || !phone || !propertyType || !budget || !location) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled",
      });
    }

    const newBuy = new Buy({
      name,
      phone,
      email,
      propertyType,
      budget,
      location,
      description,
    });

    const savedBuy = await newBuy.save();

    res.status(201).json({
      success: true,
      message: "Buy request submitted successfully",
      data: savedBuy,
    });
  } catch (error) {
    console.error("Create buy error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit buy request",
    });
  }
});

/* ================= GET ALL BUY REQUESTS (ADMIN) ================= */
router.get("/", verifyAdmin, async (req, res) => {
  try {
    console.log("Admin verified:", req.user);

    const buys = await Buy.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: buys.length,
      data: buys,
    });
  } catch (error) {
    console.error("Buy fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch buy requests",
    });
  }
});

/* ================= DELETE BUY REQUEST (ADMIN) ================= */
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
    console.error("Delete buy error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete buy request",
    });
  }
});

export default router;
