import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
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
      required: true,
      trim: true,
    },
    image: {
      type: String, // Cloudinary secure_url
      required: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt automatically
  }
);

export default mongoose.model("Property", propertySchema);
