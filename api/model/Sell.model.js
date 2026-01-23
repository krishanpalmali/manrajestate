import mongoose from "mongoose";

const sellSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    propertyType: {
      type: String,
      required: true,
      enum: ["House", "Plot", "Flat", "Land"],
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Sell = mongoose.models.Sell || mongoose.model("Sell", sellSchema);
export default Sell;
