import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String, // string me number / lakh / crore allowed
      required: true,
      trim: true,
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

    /* ===== NEW FIELDS (IMPORTANT) ===== */

    propertyType: {
      type: String, // Agricultural Land / Plot / Flat / House
      required: true,
      trim: true,
    },

    purpose: {
      type: String, // Sell / Rent
      required: true,
      trim: true,
    },

    area: {
      type: String, // Bigha / Acre / Sqft
      trim: true,
    },

    bedrooms: {
      type: String,
      trim: true,
    },

    bathrooms: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

export default mongoose.model("Property", propertySchema);
