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
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    propertyType: {
      type: String,
      required: true,
      enum: [
        // Residential
        "Apartment",
        "Flat",
        "Independent House",
        "Villa",
        "Duplex",
        "Studio Apartment",
        "Row House",
        "Farm House",
        "Plot / Land",

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

    price: {
      type: String,
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
      trim: true,
    },
  },
  { timestamps: true }
);

const Sell = mongoose.models.Sell || mongoose.model("Sell", sellSchema);
export default Sell;
