import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  LineChart, Line
} from "recharts";
import logo from "../assets/logo.png";

const stats = [
  { name: "2022", deals: 40 },
  { name: "2023", deals: 75 },
  { name: "2024", deals: 120 },
  { name: "2025", deals: 180 },
];

const buySellData = [
  { name: "Buy", value: 65 },
  { name: "Sell", value: 35 },
];

const Information = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* Header with Logo & Trust */}
      <div className="text-center mb-12">
        <img src={logo} alt="Manraj Estate Logo" className="w-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-800">Manraj Estate</h1>
        <p className="text-gray-600 mt-2">
          Your trusted real estate partner in Abu Road & nearby areas
        </p>
        <p className="mt-3 text-green-600 font-semibold">
          Building trust today, securing your property value for tomorrow 📈
        </p>
      </div>

      {/* About Section */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed">
          Manraj Estate is a professional real estate service provider based in Abu Road,
          Rajasthan. We help clients buy, sell, and invest in properties with complete
          transparency, legal security, and best market prices. Our goal is to provide
          long-term value and growth for every customer.
        </p>
      </div>

      {/* Trust & Future Growth */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-bold mb-3">
          A Smart Choice for Future Property Growth
        </h2>
        <p>
          With rapid development in Abu Road and nearby regions, property demand is
          increasing every year. Investing with Manraj Estate means choosing a secure
          future with higher returns and complete peace of mind.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
          <div className="bg-white/20 p-4 rounded">
            <h3 className="text-2xl">📈</h3>
            <p className="font-semibold">Rising Demand</p>
            <p className="text-sm">Property value grows steadily</p>
          </div>
          <div className="bg-white/20 p-4 rounded">
            <h3 className="text-2xl">🔒</h3>
            <p className="font-semibold">Secure Investment</p>
            <p className="text-sm">100% legally verified deals</p>
          </div>
          <div className="bg-white/20 p-4 rounded">
            <h3 className="text-2xl">🤝</h3>
            <p className="font-semibold">Trusted Brand</p>
            <p className="text-sm">Strong local reputation</p>
          </div>
        </div>
      </div>

      {/* Why Invest in Property */}
      <div className="bg-white p-8 rounded-lg shadow mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Why Property Investment is the Best Choice?
        </h2>
        <p className="text-gray-600 mb-6">
          Real estate is one of the safest and most powerful ways to build long-term
          wealth. It offers stable returns, physical security, and future financial
          independence.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">💰</h3>
            <h4 className="font-semibold mt-2">High Returns</h4>
            <p className="text-sm text-gray-500">
              Property prices increase with time.
            </p>
          </div>
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">📊</h3>
            <h4 className="font-semibold mt-2">Stable Investment</h4>
            <p className="text-sm text-gray-500">
              Less risky compared to stock markets.
            </p>
          </div>
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">🏠</h3>
            <h4 className="font-semibold mt-2">Passive Income</h4>
            <p className="text-sm text-gray-500">
              Rental income every month.
            </p>
          </div>
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">📈</h3>
            <h4 className="font-semibold mt-2">Rising Demand</h4>
            <p className="text-sm text-gray-500">
              Development increases property value.
            </p>
          </div>
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">🔐</h3>
            <h4 className="font-semibold mt-2">Safe Asset</h4>
            <p className="text-sm text-gray-500">
              Physical and secure investment.
            </p>
          </div>
          <div className="p-4 border rounded hover:shadow-lg transition">
            <h3 className="text-3xl">🤝</h3>
            <h4 className="font-semibold mt-2">With Manraj Estate</h4>
            <p className="text-sm text-gray-500">
              Trusted guidance and legal security.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-500">Happy Clients</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-3xl font-bold text-green-600">300+</h3>
          <p className="text-gray-500">Properties Sold</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-3xl font-bold text-purple-600">8+</h3>
          <p className="text-gray-500">Years Experience</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <h3 className="text-3xl font-bold text-red-600">100%</h3>
          <p className="text-gray-500">Trusted Deals</p>
        </div>
      </div>

      {/* Growth Graph */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Company Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="deals" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Buy vs Sell Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Buy vs Sell Ratio</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={buySellData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white p-6 rounded-lg text-center shadow mt-10">
        <h2 className="text-2xl font-bold mb-2">
          Start Your Property Investment Today!
        </h2>
        <p className="mb-4">
          Secure your future with smart real estate investments. Let Manraj Estate guide you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-green-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition"
        >
          Contact Us Now
        </a>
      </div>

    </div>
  );
};

export default Information;
