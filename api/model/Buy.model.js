import mongoose from "mongoose";

const buySchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    budget: String,
    location: String,
    propertyType: String,
  },
  { timestamps: true }
);

const Buy = mongoose.models.Buy || mongoose.model("Buy", buySchema);

export default Buy;
