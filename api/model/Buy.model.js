import mongoose from "mongoose";

const buySchema = new mongoose.Schema(
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
    budget: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    propertyType: {
      type: String,
      required: true,
      enum: [
        // Residential
        "Apartment",
        "Flat",
        "Independent House",
        "House",
        "Villa",
        "Duplex",
        "Studio Apartment",
        "Row House",
        "Farm House",
        "Plot / Land",
        "Plot",
        "Land",

        // Commercial
        "Commercial Shop",
        "Office Space",
        "Showroom",
        "Warehouse / Godown",
        "Industrial Plot",
        "Factory",
        "IT Park",

        // Rental
        "PG / Hostel",
        "Paying Guest",
        "Rental Apartment",
        "Rental Shop",

        // Special
        "Hotel / Resort",
        "Guest House",
        "Banquet Hall",
        "Restaurant / Cafe",
        "Hospital / Clinic",
        "School / College",
        "Land for Development",
      ],
    },
  },
  { timestamps: true }
);

const Buy = mongoose.models.Buy || mongoose.model("Buy", buySchema);

export default Buy;
