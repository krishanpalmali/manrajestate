import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import manrajVideo from "../assets/manraj-estate.mp4";
import logo from "../assets/logo121.png";

/* ------------------ DATA ------------------ */
const growthData = [
  { year: "2022", deals: 40 },
  { year: "2023", deals: 75 },
  { year: "2024", deals: 120 },
  { year: "2025", deals: 180 },
];

const buySellData = [
  { name: "Buy", value: 65 },
  { name: "Sell", value: 35 },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-gray-50 to-white px-6 md:px-20 pt-28 pb-24 text-center">
        <img src={logo} alt="Manraj Estate" className="w-20 mx-auto mb-6" />

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          About <span className="text-emerald-600">Manraj Estate</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Manraj Estate is a trusted real estate consultancy based in
          <span className="font-semibold text-gray-900"> Abu Road</span>,
          helping buyers, sellers, and investors make confident property decisions.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          Verified Properties • Transparent Deals • Local Expertise • Client First
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="px-6 md:px-20 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Manraj Estate was founded with a clear purpose —
              to simplify real estate transactions while maintaining complete honesty
              and transparency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We deal in residential homes, agricultural land, plots, shops,
              and commercial properties. Our deep understanding of the
              Abu Road market allows us to guide clients with confidence.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl bg-black">
            <video className="w-full h-full object-cover" controls playsInline>
              <source src={manrajVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE MANRAJ ESTATE ================= */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
          Why Choose Manraj Estate
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-start max-w-7xl mx-auto">
          {/* LEFT */}
          <div className="space-y-6">
            {[
              {
                title: "Property Listings",
                desc: "Extensive database of residential, commercial, plots, agricultural land, and luxury properties tailored to your needs.",
              },
              {
                title: "Expert Advisory",
                desc: "Experienced consultants providing guidance on pricing, market trends, and legal documentation.",
              },
              {
                title: "Technology-Driven Solutions",
                desc: "Verified listings and transparent processes using modern tools.",
              },
              {
                title: "End-to-End Services",
                desc: "Complete support from property selection to registration and legal assistance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-6 flex gap-4 hover:shadow-md transition"
              >
                <span className="text-blue-600 text-2xl font-bold">→</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Manraj Estate Property"
                className="w-full h-[320px] object-cover"
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                Our Legacy
              </h3>
              <p className="text-gray-600 mb-6">
                Years of trust, transparency, and customer satisfaction define
                Manraj Estate.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 rounded-lg py-4">
                  <h4 className="text-2xl font-bold text-blue-600">13+</h4>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
                <div className="bg-blue-50 rounded-lg py-4">
                  <h4 className="text-2xl font-bold text-blue-600">5★</h4>
                  <p className="text-sm text-gray-600">Rating</p>
                </div>
                <div className="bg-blue-50 rounded-lg py-4">
                  <h4 className="text-2xl font-bold text-blue-600">1000+</h4>
                  <p className="text-sm text-gray-600">Deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="bg-gray-50 py-24 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted real estate partner in Abu Road by
              delivering ethical, transparent, and value-driven property solutions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To connect genuine buyers and sellers with verified properties,
              while offering expert guidance from first inquiry to final registration.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 md:px-20 py-24">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { title: "10+ Years", desc: "Industry Experience" },
            { title: "500+ Clients", desc: "Happy Customers" },
            { title: "1000+ Deals", desc: "Closed Successfully" },
            { title: "100%", desc: "Verified Listings" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-3xl font-bold text-emerald-600">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MARKET INSIGHTS ================= */}
      <section className="bg-[#f5f6f8] py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-14">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-4">Company Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Line dataKey="deals" stroke="#059669" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-4">Buy vs Sell Ratio</h3>
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
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 md:px-20 py-24">
        <div className="bg-gradient-to-r from-black to-gray-900 text-white rounded-3xl p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Find the Right Property Together
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you’re buying, selling, or investing — Manraj Estate is here
            to guide you every step of the way.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-black px-10 py-3 rounded-full font-semibold"
          >
            Contact Manraj Estate
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
