import { FaHome, FaTag, FaPhone, FaShieldAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HelpCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        absolute z-50
        bottom-12 left-0 right-0 mx-auto

        w-[92%] max-w-[360px]

        md:top-1/2 md:right-20 md:left-auto md:bottom-auto
        md:-translate-y-1/2 md:translate-x-0

        bg-white
        p-4 sm:p-6
        rounded-2xl
        shadow-2xl
        border
        animate-fadeUp
      "
    >
      {/* Header */}
      <div className="text-center mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          How Can We Help You?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Choose your purpose and get instant assistance.
        </p>

        {/* Trust Badges */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <FaShieldAlt className="text-green-600" /> 100% Secure
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-blue-600" /> Quick Support
          </span>
        </div>
      </div>

      {/* BUY */}
      <button
        onClick={() => navigate("/buy")}
        className="
          w-full mb-2 sm:mb-3
          px-3 py-2 sm:px-4 sm:py-3
          text-sm sm:text-base
          flex items-center justify-between
          rounded-xl
          bg-gradient-to-r from-blue-50 to-blue-100
          border border-blue-200
          hover:from-blue-100 hover:to-blue-200
          hover:scale-[1.02]
          transition-all duration-200
        "
      >
        <span className="flex items-center gap-2 sm:gap-3 text-gray-800 font-semibold">
          <FaHome className="text-blue-600 text-base sm:text-lg" />
          I’m Buying
        </span>
        <span className="text-blue-600 font-bold text-base sm:text-lg">→</span>
      </button>

      {/* SELL */}
      <button
        onClick={() => navigate("/sell")}
        className="
          w-full mb-3 sm:mb-4
          px-3 py-2 sm:px-4 sm:py-3
          text-sm sm:text-base
          flex items-center justify-between
          rounded-xl
          bg-gradient-to-r from-green-50 to-green-100
          border border-green-200
          hover:from-green-100 hover:to-green-200
          hover:scale-[1.02]
          transition-all duration-200
        "
      >
        <span className="flex items-center gap-2 sm:gap-3 text-gray-800 font-semibold">
          <FaTag className="text-green-600 text-base sm:text-lg" />
          I’m Selling
        </span>
        <span className="text-green-600 font-bold text-base sm:text-lg">→</span>
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="text-[10px] sm:text-xs text-gray-400">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* CALL */}
      <a
        href="tel:9602273282"
        className="
          w-full
          bg-gradient-to-r from-red-600 to-red-700
          text-white
          px-3 py-2 sm:px-4 sm:py-3
          text-sm sm:text-base
          rounded-xl
          flex items-center justify-center gap-2
          font-semibold
          hover:from-red-700 hover:to-red-800
          hover:scale-[1.02]
          transition-all duration-200
        "
      >
        <FaPhone />
        Call Now: +91 9602273282
      </a>

      {/* Footer */}
      <p className="text-[10px] sm:text-[11px] text-center text-gray-400 mt-2 sm:mt-3">
        Trusted by 500+ clients • Transparent deals • Fast response
      </p>
    </div>
  );
};

export default HelpCard;
