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

  useEffect(() => {
    Promise.all([fetchBuyData(), fetchSellData(), fetchProperties()])
      .finally(() => setLoading(false));
  }, []);

  // ================= FETCH FUNCTIONS =================

  const fetchBuyData = async () => {
    try {
      const res = await fetch("/api/buy", { credentials: "include" });
      const result = await res.json();
      setBuyData(Array.isArray(result) ? result : result.data || []);
    } catch {
      setBuyData([]);
    }
  };

  const fetchSellData = async () => {
    try {
      const res = await fetch("/api/sell", { credentials: "include" });
      const result = await res.json();
      setSellData(Array.isArray(result) ? result : result.data || []);
    } catch {
      setSellData([]);
    }
  };

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/property/all");
      const data = await res.json();
      setProperties(data || []);
    } catch {
      setProperties([]);
    }
  };

  // ================= DELETE FUNCTIONS =================

  const deleteBuyRequest = async (id) => {
    if (!window.confirm("Delete this Buy request?")) return;
    await fetch(`/api/buy/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    setBuyData((prev) => prev.filter((item) => item._id !== id));
  };

  const deleteSellRequest = async (id) => {
    if (!window.confirm("Delete this Sell request?")) return;
    await fetch(`/api/sell/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    setSellData((prev) => prev.filter((item) => item._id !== id));
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

      {/* ADD PROPERTY */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => navigate("/admin/add-property")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow"
        >
          ➕ Add New Property
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <Stat title="Buy Requests" value={buyData.length} color="green" />
        <Stat title="Sell Requests" value={sellData.length} color="blue" />
        <Stat
          title="Total Leads"
          value={buyData.length + sellData.length}
          color="indigo"
        />
        <Stat title="Total Properties" value={properties.length} color="purple" />
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-12">
        <h2 className="text-xl font-semibold mb-4">📊 Buy vs Sell</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TABLES */}
      {/* Buy & Sell tables – same as your existing implementation */}
    </div>
  );
};

const Stat = ({ title, value, color }) => (
  <div className="bg-white p-5 rounded-xl shadow text-center">
    <h3 className="text-gray-500">{title}</h3>
    <p className={`text-3xl font-bold text-${color}-600`}>{value}</p>
  </div>
);

export default Admin;
