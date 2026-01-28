// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Admin = () => {
  const navigate = useNavigate();

  const [buyData, setBuyData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchBuyData(), fetchSellData(), fetchProperties()]).finally(
      () => setLoading(false)
    );
  }, []);

  // ================= FETCH FUNCTIONS =================

  const fetchBuyData = async () => {
    try {
      const res = await fetch("/api/buy", { credentials: "include" });
      const result = await res.json();
      setBuyData(Array.isArray(result) ? result : result.data || []);
    } catch (error) {
      console.error("Buy data error:", error.message);
      setBuyData([]);
    }
  };

  const fetchSellData = async () => {
    try {
      const res = await fetch("/api/sell", { credentials: "include" });
      const result = await res.json();
      setSellData(Array.isArray(result) ? result : result.data || []);
    } catch (error) {
      console.error("Sell data error:", error.message);
      setSellData([]);
    }
  };

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/property/all");
      const data = await res.json();
      setProperties(data || []);
    } catch (error) {
      console.error("Property fetch error:", error.message);
      setProperties([]);
    }
  };

  // ================= DELETE FUNCTIONS =================

  const deleteBuyRequest = async (id) => {
    if (!window.confirm("Delete this Buy request?")) return;
    try {
      await fetch(`/api/buy/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      setBuyData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete Buy error:", error.message);
    }
  };

  const deleteSellRequest = async (id) => {
    if (!window.confirm("Delete this Sell request?")) return;
    try {
      await fetch(`/api/sell/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      setSellData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete Sell error:", error.message);
    }
  };

  // ================= CHART DATA =================

  const chartData = [
    { name: "Buy Requests", value: buyData.length },
    { name: "Sell Requests", value: sellData.length },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading Admin Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
        🛠 Admin Dashboard
      </h1>

      {/* ADD PROPERTY BUTTON */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate("/admin/add-property")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition"
        >
          ➕ Add New Property
        </button>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Buy Requests</h3>
          <p className="text-3xl font-bold text-green-600">{buyData.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Sell Requests</h3>
          <p className="text-3xl font-bold text-blue-600">{sellData.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Total Leads</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {buyData.length + sellData.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Total Properties</h3>
          <p className="text-3xl font-bold text-purple-600">
            {properties.length}
          </p>
        </div>
      </div>

      {/* GRAPH SECTION */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          📊 Buy vs Sell Requests
        </h2>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= BUY REQUESTS TABLE ================= */}
      <div className="bg-white p-5 rounded-xl shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          🏠 Buy Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead className="bg-green-50">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Budget</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {buyData.length ? (
                buyData.map((item, i) => (
                  <tr key={item._id} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.phone}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2 text-green-600 font-semibold">
                      ₹{item.budget}
                    </td>
                    <td className="border p-2">{item.location}</td>
                    <td className="border p-2">{item.propertyType}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => deleteBuyRequest(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No Buy Requests Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= SELL REQUESTS TABLE ================= */}
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          🏷 Sell Requests
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg">
            <thead className="bg-blue-50">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Property</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {sellData.length ? (
                sellData.map((item, i) => (
                  <tr key={item._id} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.phone}</td>
                    <td className="border p-2">{item.email}</td>
                    <td className="border p-2">{item.propertyType}</td>
                    <td className="border p-2 text-blue-600 font-semibold">
                      ₹{item.price}
                    </td>
                    <td className="border p-2">{item.location}</td>
                    <td className="border p-2 text-center">
                      <button
                        onClick={() => deleteSellRequest(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center p-6 text-gray-500">
                    No Sell Requests Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
