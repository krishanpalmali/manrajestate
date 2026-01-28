// src/pages/AddProperty.jsx
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProperty = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // image preview
  };

  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, `properties/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(percent));
        },
        (error) => reject(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);
      setProgress(0);

      const imageURL = await uploadImage(image);

      const propertyData = {
        ...form,
        image: imageURL,
      };

      await fetch("/api/property/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(propertyData),
      });

      alert("Property Added Successfully");

      setForm({
        title: "",
        price: "",
        location: "",
        description: "",
      });
      setImage(null);
      setPreview(null);
      setProgress(0);
    } catch (error) {
      console.log(error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-4xl p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          🏠 Add New Property
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-gray-600">
              Property Name
            </label>
            <input
              type="text"
              name="title"
              placeholder="Luxury Villa, 2BHK Flat..."
              value={form.title}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Price</label>
            <input
              type="number"
              name="price"
              placeholder="500000"
              value={form.price}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Udaipur, Jaipur, Delhi..."
              value={form.location}
              onChange={handleChange}
              className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-3 rounded-lg w-full mt-1 bg-gray-50"
            />
          </div>
        </div>

        {/* IMAGE PREVIEW */}
        {preview && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl border shadow-sm"
            />
          </div>
        )}

        <div className="mt-6">
          <label className="text-sm font-semibold text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Write property details..."
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="border p-3 rounded-lg w-full mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
          ></textarea>
        </div>

        {/* PROGRESS BAR */}
        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-3 mt-5">
            <div
              className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
            <p className="text-sm text-center mt-1 text-gray-600">
              Uploading: {progress}%
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold shadow-lg transition disabled:opacity-50"
        >
          {loading ? "Uploading Property..." : "Add Property"}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
