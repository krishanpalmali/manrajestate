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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Firebase upload
  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      const fileName = Date.now() + "_" + file.name;
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
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
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

      // 1. Upload image to Firebase
      const imageURL = await uploadImage(image);

      // 2. Send property data to backend (relative API path)
      const propertyData = {
        ...form,
        image: imageURL,
      };

      const res = await fetch("/api/property/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(propertyData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Property create failed");
        return;
      }

      alert("Property Added Successfully 🎉");

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
      alert("Something went wrong");
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
          <input
            name="title"
            placeholder="Property Title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-3 rounded-lg"
          />
        </div>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 w-full h-64 object-cover rounded-lg"
          />
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mt-4"
        ></textarea>

        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
            <p className="text-center text-sm mt-1">{progress}% Uploaded</p>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          {loading ? "Uploading..." : "Add Property"}
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
