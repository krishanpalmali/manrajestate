import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo121.png";

/* ---------------- DATA ---------------- */

const marketSnapshot = [
  {
    title: "Strategic Location Advantage",
    desc: "Abu Road connects Rajasthan and Gujarat, making it ideal for investors and end users.",
  },
  {
    title: "Rising Demand",
    desc: "Residential plots and agricultural land demand has remained strong in recent years.",
  },
  {
    title: "Future Growth Potential",
    desc: "Infrastructure and highway projects indicate strong future appreciation.",
  },
];

const buyerSellerInsight = [
  {
    type: "What Buyers Usually Look For",
    points: [
      "Legally verified, registry-ready properties",
      "Long-term investment value",
      "Clear and safe documentation",
    ],
  },
  {
    type: "What Sellers Usually Expect",
    points: [
      "Fair market pricing",
      "Fast and transparent process",
      "Professional paperwork handling",
    ],
  },
];

const investmentTypes = [
  {
    name: "Residential Plots",
    info: "Best for home construction and long-term appreciation.",
  },
  {
    name: "Agricultural Land",
    info: "Ideal for farming, farmhouses, and future conversion.",
  },
  {
    name: "Commercial Property",
    info: "Perfect for shops, offices, and rental income.",
  },
];

const growthData = [
  { year: "2021", deals: 25 },
  { year: "2022", deals: 55 },
  { year: "2023", deals: 90 },
  { year: "2024", deals: 140 },
  { year: "2025", deals: 200 },
];

const cardStyle =
  "bg-[#dfe9e3] rounded-2xl border border-[#c9d6cf] shadow-lg p-5 sm:p-6 hover:shadow-2xl transition";

const Information = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2f3e34] via-[#3a4f44] to-[#1f2d25] text-gray-900">

      {/* HEADER */}
      <div className="bg-[#1f2d25]/90 backdrop-blur border-b border-[#3f5c4b] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center text-gray-100">
          <img src={logo} alt="Manraj Estate" className="w-16 sm:w-20 mx-auto mb-3" />
          <h1 className="text-2xl sm:text-3xl font-bold">
            Property Information & Market Guide
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-1">
            Clear, Honest Real Estate Guidance – Abu Road
          </p>
        </div>
      </div>

      {/* MARKET SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8">
          Abu Road Market Snapshot
          <span className="block h-1 w-16 bg-emerald-400 rounded-full mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketSnapshot.map((item, i) => (
            <div key={i} className={cardStyle}>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUYER & SELLER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {buyerSellerInsight.map((item, i) => (
            <div key={i} className={cardStyle}>
              <h3 className="text-xl font-semibold mb-3">{item.type}</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm sm:text-base">
                {item.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* INVESTMENT TYPES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8">
          Property Investment Options
          <span className="block h-1 w-16 bg-emerald-400 rounded-full mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {investmentTypes.map((item, i) => (
            <div key={i} className={cardStyle}>
              <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
              <p className="text-sm text-gray-700">{item.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT PROPERTY – GO TO PROPERTY LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#25362d] rounded-3xl p-8 sm:p-12 shadow-2xl text-gray-100 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want to Visit a Property?
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 mb-8">
            First explore available properties. Select the one you like,
            then schedule a site visit with full guidance.
          </p>

          <button
            onClick={() => navigate("/propertyList")}
            className="inline-block bg-emerald-600 text-black px-10 py-4 rounded-full font-semibold hover:bg-emerald-500 transition"
          >
            View Available Properties
          </button>

          <p className="mt-4 text-sm text-gray-400">
            ✔ No obligation • ✔ Honest guidance • ✔ Local experts
          </p>
        </div>
      </section>

      {/* GROWTH GRAPH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className={cardStyle}>
          <h2 className="text-2xl font-bold mb-4">
            Market Activity Growth Insight
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="deals"
                stroke="#059669"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0f1a14] text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Talk Before You Decide?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-400 text-sm sm:text-base">
            One honest conversation can save you from a wrong decision.
          </p>
          <button
            onClick={() => navigate("/properties")}
            className="inline-block bg-emerald-600 text-black px-10 py-3 rounded-full font-semibold hover:bg-emerald-500 transition"
          >
            View Properties
          </button>
        </div>
      </section>

    </div>
  );
};

export default Information;
