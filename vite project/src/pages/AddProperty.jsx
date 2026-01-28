import { useEffect, useState } from "react";

export default function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Fetch all properties
  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/property/all");
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // Add property
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image first");
      return;
    }

    const data = new FormData();
    data.append("title", form.title);
    data.append("price", form.price);
    data.append("location", form.location);
    data.append("description", form.description);
    data.append("image", image);

    try {
      setLoading(true);

      const res = await fetch("/api/property/create", {
        method: "POST",
        body: data,
        credentials: "include", // admin check ke liye
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Upload failed");
        return;
      }

      alert("Property Added Successfully");

      setForm({
        title: "",
        price: "",
        location: "",
        description: "",
      });
      setImage(null);

      fetchProperties(); // list refresh
    } catch (error) {
      console.log(error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  // Delete property
  const deleteProperty = async (id) => {
    if (!window.confirm("Delete this property?")) return;

    try {
      const res = await fetch(`/api/property/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Delete failed");
        return;
      }

      alert("Property Deleted");
      setProperties((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      console.log(error);
      alert("Delete error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* ADD FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow mb-10"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Property</h2>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full mb-3"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        ></textarea>

        <button
          disabled={loading}
          className="bg-indigo-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Uploading..." : "Add Property"}
        </button>
      </form>

      {/* PROPERTY LIST UNDER ADD PROPERTY */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          Existing Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={`http://localhost:3000${p.image}`}
                alt={p.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-600">📍 {p.location}</p>
                <p className="text-green-600 font-bold">₹ {p.price}</p>

                <button
                  onClick={() => deleteProperty(p._id)}
                  className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded w-full"
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

