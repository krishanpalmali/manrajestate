import { FaHome, FaTag, FaPhone, FaShieldAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HelpCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        mx-auto mt-6
        w-[92%] max-w-[360px]

        md:absolute md:z-30
        md:top-1/2 md:right-20
        md:-translate-y-1/2
        md:mt-0

        bg-white/95 backdrop-blur
        p-5 sm:p-6
        rounded-2xl
        shadow-2xl
        border border-gray-200
      "
    >
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          How Can We Help You?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Choose your purpose and get instant assistance.
        </p>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4 mt-3 text-[11px] sm:text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaShieldAlt className="text-emerald-600" /> 100% Secure
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-emerald-600" /> Quick Support
          </span>
        </div>
      </div>

      {/* BUY */}
      <button
        onClick={() => navigate("/buy")}
        className="
          w-full mb-3
          px-4 py-3
          flex items-center justify-between
          rounded-xl
          bg-gradient-to-r from-emerald-50 to-emerald-100
          border border-emerald-200
          hover:from-emerald-100 hover:to-emerald-200
          hover:scale-[1.02]
          transition-all
        "
      >
        <span className="flex items-center gap-3 font-semibold">
          <FaHome className="text-emerald-600 text-lg" />
          I’m Buying
        </span>
        <span className="text-emerald-600 font-bold text-lg">→</span>
      </button>

      {/* SELL */}
      <button
        onClick={() => navigate("/sell")}
        className="
          w-full mb-4
          px-4 py-3
          flex items-center justify-between
          rounded-xl
          bg-gray-100
          border border-gray-300
          hover:bg-gray-200
          hover:scale-[1.02]
          transition-all
        "
      >
        <span className="flex items-center gap-3 font-semibold">
          <FaTag className="text-gray-800 text-lg" />
          I’m Selling
        </span>
        <span className="text-gray-800 font-bold text-lg">→</span>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-[11px] text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* CALL */}
      <a
        href="tel:9602273282"
        className="
          w-full
          bg-gradient-to-r from-emerald-600 to-emerald-700
          text-white
          px-4 py-3
          rounded-xl
          flex items-center justify-center gap-2
          font-semibold
          hover:from-emerald-700 hover:to-emerald-800
          hover:scale-[1.02]
          transition-all
        "
      >
        <FaPhone />
        Call Now: +91 9602273282
      </a>

      {/* Footer */}
      <p className="text-[11px] text-center text-gray-400 mt-3">
        Trusted by 500+ clients • Transparent deals • Fast response
      </p>
    </div>
  );
};

export default HelpCard;
