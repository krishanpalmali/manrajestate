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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation (matches backend)
    const { name, phone, propertyType, price, location } = formData;
    if (!name || !phone || !propertyType || !price || !location) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

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

      alert("🏠 Sell Request Submitted Successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        propertyType: "",
        price: "",
        location: "",
        description: "",
      });

      navigate("/");
    } catch (error) {
      console.error("Sell form error:", error);
      alert(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg border"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Sell Property
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Owner Name *"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.name}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Contact Number *"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.phone}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.email}
        />

        <select
          name="propertyType"
          className="w-full border px-3 py-2 mb-3 rounded bg-white"
          onChange={handleChange}
          value={formData.propertyType}
          required
        >
          <option value="">Select Property Type *</option>

          <optgroup label="Residential">
            <option>Apartment</option>
            <option>Flat</option>
            <option>Independent House</option>
            <option>Villa</option>
            <option>Plot / Land</option>
          </optgroup>

          <optgroup label="Commercial">
            <option>Shop</option>
            <option>Office</option>
            <option>Warehouse</option>
            <option>Industrial Plot</option>
          </optgroup>
        </select>

        <input
          type="text"
          name="price"
          placeholder="Expected Price *"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.price}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Property Location *"
          className="w-full border px-3 py-2 mb-3 rounded"
          onChange={handleChange}
          value={formData.location}
          required
        />

        <textarea
          name="description"
          placeholder="Property Description (optional)"
          className="w-full border px-3 py-2 mb-4 rounded"
          onChange={handleChange}
          value={formData.description}
          rows="3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded font-semibold disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Property"}
        </button>
      </form>
    </div>
  );
};

export default Sell;
