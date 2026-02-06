import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 🔒 Hide Navbar & Footer on Admin Login
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Invalid credentials");
      }

      const data = await res.json();
      dispatch(signInSuccess(data.admin));
      navigate("/admin");
    } catch (err) {
      console.error("Login error:", err);
      alert(err.message || "Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-200">
        {/* HEADER */}
        <div className="border-b px-6 py-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">
            Admin Panel Login
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Authorized access only
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="px-6 py-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@example.com"
              className="
                w-full border border-gray-300 rounded-md px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full border border-gray-300 rounded-md px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-indigo-500
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="
              w-full bg-indigo-600 text-white py-2 rounded-md
              font-medium tracking-wide
              hover:bg-indigo-700 transition
            "
          >
            Sign In
          </button>
        </form>

        {/* FOOTER */}
        <div className="border-t px-6 py-3 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Admin System
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
