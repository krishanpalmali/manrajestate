import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    price: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sell/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Sell request failed");
      }

      alert("Sell Request Submitted Successfully 🏠");
      console.log(data);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        price: "",
        location: "",
        description: "",
      });

      // Redirect to Home page
      navigate("/");
    } catch (error) {
      console.error("Sell form error:", error);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Sell Property Form
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <select
          name="propertyType"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.propertyType}
          required
        >
          <option value="">Select Property Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Commercial</option>
        </select>

        <input
          type="text"
          name="price"
          placeholder="Expected Price"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.price}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Property Location"
          className="w-full border p-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.location}
          required
        />

        <textarea
          name="description"
          placeholder="Property Description"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
          value={formData.description}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
