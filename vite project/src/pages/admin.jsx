// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Admin = () => {
  const [buyData, setBuyData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([fetchBuyData(), fetchSellData()]).finally(() =>
      setLoading(false)
    );
  }, []);

  // BUY DATA
  const fetchBuyData = async () => {
    try {
      const res = await fetch("/api/buy", {
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const result = await res.json();

      if (Array.isArray(result)) {
        setBuyData(result);
      } else if (result.success && Array.isArray(result.data)) {
        setBuyData(result.data);
      } else {
        setBuyData([]);
      }
    } catch (error) {
      console.error("Error fetching buy data:", error.message);
      setBuyData([]);
    }
  };

  // SELL DATA
  const fetchSellData = async () => {
    try {
      const res = await fetch("/api/sell", {
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const result = await res.json();

      if (Array.isArray(result)) {
        setSellData(result);
      } else if (result.success && Array.isArray(result.data)) {
        setSellData(result.data);
      } else {
        setSellData([]);
      }
    } catch (error) {
      console.error("Error fetching sell data:", error.message);
      setSellData([]);
    }
  };

  const deleteBuyRequest = async (id) => {
    if (!window.confirm("Delete this Buy request?")) return;
    try {
      const res = await fetch(`/api/buy/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setBuyData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting buy request:", error.message);
    }
  };

  const deleteSellRequest = async (id) => {
    if (!window.confirm("Delete this Sell request?")) return;
    try {
      const res = await fetch(`/api/sell/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setSellData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting sell request:", error.message);
    }
  };

  const chartData = [
    { name: "Buy Requests", value: buyData.length },
    { name: "Sell Requests", value: sellData.length },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-semibold">
        Loading Admin Panel...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-10 text-center text-indigo-600">
        🛠 Admin Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Total Buy Requests</h3>
          <p className="text-3xl font-bold text-green-600">{buyData.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Total Sell Requests</h3>
          <p className="text-3xl font-bold text-blue-600">{sellData.length}</p>
        </div>
        <div className="bg-white p-5 rounded-xl shadow text-center">
          <h3 className="text-gray-500">Total Leads</h3>
          <p className="text-3xl font-bold text-indigo-600">
            {buyData.length + sellData.length}
          </p>
        </div>
      </div>

      {/* GRAPH SECTION */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          📊 Buy vs Sell Requests Overview
        </h2>
        <div style={{ width: "100%", height: 300, minHeight: 300 }}>
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

      {/* BUY REQUESTS */}
      <div className="bg-white p-5 rounded-xl shadow-lg mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-green-600">
            🏠 Buy Requests
          </h2>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            Total: {buyData.length}
          </span>
        </div>

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
              {buyData.length > 0 ? (
                buyData.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    } hover:bg-indigo-50 transition`}
                  >
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
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
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

      {/* SELL REQUESTS */}
      <div className="bg-white p-5 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-blue-600">
            🏷 Sell Requests
          </h2>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            Total: {sellData.length}
          </span>
        </div>

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
              {sellData.length > 0 ? (
                sellData.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    } hover:bg-indigo-50 transition`}
                  >
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
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
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
