import { useEffect, useState } from "react";

export default function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
    propertyType: "",
    purpose: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  // 🔒 HIDE HEADER & FOOTER (ADMIN PAGE)
  useEffect(() => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      if (header) header.style.display = "block";
      if (footer) footer.style.display = "block";
    };
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ---------------- FETCH ALL PROPERTIES ---------------- */
  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/property/all", {
        credentials: "include",
      });
      const data = await res.json();
      setProperties(data || []);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  /* ---------------- ADD PROPERTY ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    if (image.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );
      formData.append("image", image);

      const res = await fetch("/api/property/create", {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Upload failed");
        return;
      }

      alert("✅ Property Added Successfully");

      setForm({
        title: "",
        price: "",
        location: "",
        description: "",
        propertyType: "",
        purpose: "",
        area: "",
        bedrooms: "",
        bathrooms: "",
      });
      setImage(null);

      fetchProperties();
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- DELETE PROPERTY ---------------- */
  const deleteProperty = async (id) => {
    if (!window.confirm("Delete this property?")) return;

    try {
      const res = await fetch(`/api/property/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        alert("Delete failed");
        return;
      }

      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* ADD FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow mb-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          ➕ Add Property
        </h2>

        {[
          ["title", "Title"],
          ["price", "Price"],
          ["location", "Location"],
          ["area", "Area (sq ft)"],
          ["bedrooms", "Bedrooms"],
          ["bathrooms", "Bathrooms"],
        ].map(([name, label]) => (
          <input
            key={name}
            name={name}
            placeholder={label}
            value={form[name]}
            onChange={handleChange}
            className="border p-2 w-full mb-3 rounded"
          />
        ))}

        <select
          name="propertyType"
          value={form.propertyType}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
        >
          <option value="">Select Property Type</option>
          <option value="Plot">Plot</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>

        <select
          name="purpose"
          value={form.purpose}
          onChange={handleChange}
          className="border p-2 w-full mb-3 rounded"
          required
        >
          <option value="">Select Purpose</option>
          <option value="Sell">Sell</option>
          <option value="Rent">Rent</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full mb-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Add Property"}
        </button>
      </form>

      {/* PROPERTY LIST */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p._id} className="bg-white rounded shadow">
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold">{p.title}</h3>
              <p>📍 {p.location}</p>
              <p className="text-green-600 font-bold">₹ {p.price}</p>
              <button
                onClick={() => deleteProperty(p._id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded w-full"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
