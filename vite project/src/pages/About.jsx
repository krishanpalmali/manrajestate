// src/pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-10 md:px-20">

      {/* Hero Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Turning Your Dream Property Into Reality
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
          At <span className="font-semibold text-black">Manraj Estate</span>, we deal in all types of properties –
          <span className="font-semibold text-black">
            {" "}Homes, Agricultural Land, Plots, Shops, and Commercial Properties.
          </span>
          <br />
          We don’t just sell properties, we build trust, confidence, and lifelong relationships.
          Your dream, our commitment.
        </p>

        {/* Quick Trust Line */}
        <p className="mt-4 text-sm text-gray-500">
          ✔ Verified Properties | ✔ Legal Support | ✔ 100% Transparency | ✔ Trusted by 500+ Clients
        </p>
      </div>

      {/* Main Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Why Manraj Estate?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Buying or selling a property is one of the most important decisions of life.
            That’s why Manraj Estate is built on honesty, transparency, and dedication.
            We ensure every deal is smooth, secure, and profitable for you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you are looking for a dream home, fertile agricultural land, a residential plot,
            a running shop, or a commercial property for business, Manraj Estate is your one-stop destination.
            We provide genuine listings and the best guidance for every type of property.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
            alt="Dream Property"
            className="rounded-xl shadow-xl"
          />
        </div>
      </div>

      {/* Property Types */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Property Types We Deal In
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {["🏡 Homes", "🌾 Agricultural Land", "📐 Plots", "🏪 Shops", "🏢 Commercial Property"].map(
            (item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow font-semibold hover:shadow-xl transition"
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="bg-white rounded-2xl shadow-lg p-10 mb-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To make property buying and selling simple, transparent, and trustworthy.
              We aim to give every client the confidence that they are making the right decision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted real estate platform where people come not just for properties,
              but for peace of mind and long-term satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Are all properties verified?</h3>
            <p className="text-gray-600 mt-2">
              Yes, every property listed on Manraj Estate is verified with legal documents and ownership details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Do you help with legal documentation?</h3>
            <p className="text-gray-600 mt-2">
              Yes, we provide complete support for agreements, registry, and legal paperwork.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Do you deal in agricultural land and plots?</h3>
            <p className="text-gray-600 mt-2">
              Absolutely. We deal in homes, agricultural land, plots, shops, and commercial properties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">Are there any hidden charges?</h3>
            <p className="text-gray-600 mt-2">
              No, we believe in complete transparency. There are no hidden costs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg">How do I get started?</h3>
            <p className="text-gray-600 mt-2">
              Just click on “Get Started Today” and explore properties or contact us for guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-black text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Find Your Perfect Property?
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Whether you are buying your first home or investing in land or commercial property,
          Manraj Estate is here to guide you with honesty and transparency.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-black px-10 py-3 rounded-full font-semibold hover:bg-gray-200 hover:scale-105 transition-transform"
        >
          Get Started Today
        </button>

        <p className="mt-4 text-sm text-gray-400">
          🔒 Your information is safe with us. We respect your privacy.
        </p>
      </div>

    </div>
  );
};

export default About;
