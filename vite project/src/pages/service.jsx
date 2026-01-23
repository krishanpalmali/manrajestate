import React, { useState } from "react";
import { FaHandshake, FaMoneyBillWave, FaHome, FaExchangeAlt } from "react-icons/fa";
import Footer from "../component/Footer";

const services = [
  {
    title: "Guaranteed Sold",
    tag: "For Sellers",
    shortDesc:
      "We guarantee to sell your home at a pre-agreed price and timeframe.",
    fullDesc:
      "We guarantee to sell your home at a pre-agreed price and timeframe. If we fail to do so, we will buy it ourselves. This gives you complete confidence, removes uncertainty, and ensures you never get stuck waiting for the right buyer. Your property sale becomes predictable and stress-free.",
    icon: <FaHandshake className="text-blue-600 text-2xl" />,
    bg: "bg-blue-100",
  },
  {
    title: "Get a Cash Offer",
    tag: "For Sellers",
    shortDesc:
      "Get multiple cash offers within 72 hours and move on your timeline.",
    fullDesc:
      "Receive multiple verified cash offers on your home within 72 hours. No long waiting periods, no complicated negotiations. You choose the best offer and move according to your own schedule with complete transparency and speed.",
    icon: <FaMoneyBillWave className="text-red-500 text-2xl" />,
    bg: "bg-red-100",
  },
  {
    title: "Home Evaluation",
    tag: "For Sellers",
    shortDesc:
      "Instantly find out how much your home is worth using our tool.",
    fullDesc:
      "Our smart home evaluation tool gives you an accurate and real-time market price of your property. This helps you make informed decisions, set the right price, and maximize your profit without guesswork.",
    icon: <FaHome className="text-green-600 text-2xl" />,
    bg: "bg-green-100",
  },
  {
    title: "Buy Before You Sell",
    tag: "For Sellers",
    shortDesc:
      "Buy your next home without worrying about owning two properties.",
    fullDesc:
      "We guarantee the sale of your current home so you can confidently purchase your next one. No financial pressure, no double EMI, and no fear of owning two properties at the same time.",
    icon: <FaExchangeAlt className="text-purple-600 text-2xl" />,
    bg: "bg-purple-100",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReadMore = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our <span className="text-red-500">Products & Services</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Powerful solutions designed to make your property journey simple,
            safe, and profitable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="border bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${item.bg}`}
              >
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                {item.tag}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {activeIndex === index ? item.fullDesc : item.shortDesc}
              </p>

              {/* Read More Button */}
              <button
                onClick={() => toggleReadMore(index)}
                className="mt-4 text-sm font-semibold text-red-500 hover:text-red-700 transition"
              >
                {activeIndex === index ? "Show Less ←" : "Read More →"}
              </button>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="text-center mt-24">
          <h2 className="text-4xl font-light">
            We’ve Helped{" "}
            <span className="text-red-500 font-semibold">
              Thousands of Families
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our services are trusted by homeowners and investors who want
            security, speed, and transparency in every deal. Your success is our
            reputation.
          </p>
          <p className="text-gray-400 mt-2">
            Each successful transaction builds more trust and stronger
            relationships.
          </p>
        </div>
      </div>
    </div>
  );
  <Footer/>
};

export default Services;
