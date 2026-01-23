import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  getBuyData,
  getSellData,
} from "../controller/user.controller.js";

import { verifyUser } from "../utils/verifyuser.js";
import { verifyAdmin } from "../utils/verifyadmin.js";

const router = express.Router();

router.get("/test", test);

// Normal user routes (ID token se aayega, params se nahi)
router.post("/update", verifyUser, updateUser);
router.delete("/delete", verifyUser, deleteUser);

// Admin only routes
router.get("/buy", verifyUser, verifyAdmin, getBuyData);
router.get("/sell", verifyUser, verifyAdmin, getSellData);

export default router;
