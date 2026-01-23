import User from "../model/user.model.js";
import Buy from "../model/Buy.model.js";
import Sell from "../model/Sell.model.js";

// Test
export const test = (req, res) => {
  res.json({ message: "hello" });
};

// Update User
export const updateUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Update failed" });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Delete failed" });
  }
};

// 🔥 Admin: Get Buy Data
export const getBuyData = async (req, res) => {
  try {
    const buyData = await Buy.find();
    res.status(200).json(buyData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch Buy data" });
  }
};

// 🔥 Admin: Get Sell Data
export const getSellData = async (req, res) => {
  try {
    const sellData = await Sell.find();
    res.status(200).json(sellData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch Sell data" });
  }
};
