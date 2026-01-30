import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    location: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/buy/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      alert("Buy Request Submitted Successfully 🚀");
      console.log(data);

      setFormData({
        name: "",
        phone: "",
        email: "",
        budget: "",
        location: "",
        propertyType: "",
      });

      navigate("/");
    } catch (error) {
      console.error("Buy form error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Buy Property Form
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.name}
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Contact Number"
          className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.email}
          required
        />

        {/* Budget */}
        <input
          type="text"
          name="budget"
          placeholder="Budget (e.g. 25 Lac - 50 Lac)"
          className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.budget}
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          className="w-full border border-gray-300 px-3 py-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
          value={formData.location}
        />

        {/* Property Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            name="propertyType"
            className="w-full border border-gray-300 px-3 py-2 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.propertyType}
            required
          >
            <option value="">Select Property Type</option>

            <optgroup label="🏠 Residential">
              <option>Apartment</option>
              <option>Flat</option>
              <option>Independent House</option>
              <option>Villa</option>
              <option>Duplex</option>
              <option>Studio Apartment</option>
              <option>Row House</option>
              <option>Farm House</option>
              <option>Plot / Land</option>
            </optgroup>

            <optgroup label="🏢 Commercial">
              <option>Commercial Shop</option>
              <option>Office Space</option>
              <option>Showroom</option>
              <option>Warehouse / Godown</option>
              <option>Industrial Plot</option>
              <option>Factory</option>
              <option>IT Park</option>
            </optgroup>

            <optgroup label="🏘 Rental">
              <option>PG / Hostel</option>
              <option>Paying Guest</option>
              <option>Rental Apartment</option>
              <option>Rental Shop</option>
            </optgroup>

            <optgroup label="⭐ Special Properties">
              <option>Hotel / Resort</option>
              <option>Guest House</option>
              <option>Banquet Hall</option>
              <option>Restaurant / Cafe</option>
              <option>Hospital / Clinic</option>
              <option>School / College</option>
              <option>Land for Development</option>
            </optgroup>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-semibold"
        >
          Submit Buy Request
        </button>
      </form>
    </div>
  );
};

export default Buy;
