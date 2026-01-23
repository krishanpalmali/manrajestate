import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signOut,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
  });

  // Input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Update Profile (NO :id, backend token se user identify karega)
  const handleUpdate = async () => {
    try {
      dispatch(updateUserStart());

      const res = await fetch("/api/user/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        dispatch(updateUserFailure(data.message || "Update failed"));
        alert(data.message || "Update failed");
        return;
      }

      dispatch(updateUserSuccess(data));
      alert("Profile updated successfully 🎉");
    } catch (error) {
      console.log(error);
      dispatch(updateUserFailure(error.message));
      alert("Something went wrong");
    }
  };

  // Sign Out
  const handleSignOut = async () => {
    await fetch("/api/auth/signout", {
      method: "POST",
      credentials: "include",
    });
    dispatch(signOut());
    navigate("/sign-in");
  };

  // Delete Account (NO :id, backend token se delete karega)
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (!confirmDelete) return;

    const res = await fetch("/api/user/delete", {
      method: "DELETE",
      credentials: "include",
    });

    if (res.ok) {
      dispatch(signOut());
      navigate("/sign-up");
    } else {
      alert("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center mb-6">My Profile</h1>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label>Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

          <button
            onClick={handleSignOut}
            className="bg-yellow-500 text-white py-2 rounded"
          >
            Sign Out
          </button>

          <button
            onClick={handleDeleteAccount}
            className="bg-red-600 text-white py-2 rounded"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

