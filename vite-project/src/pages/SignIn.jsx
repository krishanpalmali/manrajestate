import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  signInSuccess,
  signInFailure,
  signInStart,
} from "../redux/user/userSlice";
import { OAuth } from "../component/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // 🔥 cookies ke liye must
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Signin Response:", data);

      if (!res.ok) {
        dispatch(signInFailure(data.message || "Invalid credentials"));
        alert(data.message || "Invalid credentials");
        return;
      }

      dispatch(signInSuccess(data.user));
      alert("Login successful 🎉");
      navigate("/");
    } catch (error) {
      dispatch(signInFailure("Something went wrong"));
      console.log("Signin error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>

        {/* Google / OAuth Login */}
        <OAuth />

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Normal Email/Password Login */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.password}
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
