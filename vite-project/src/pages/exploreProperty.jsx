import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ExploreProperties({ properties }) {
  const navigate = useNavigate();

  // agar property nahi hai to section hide
  if (!properties || properties.length === 0) return null;

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP BANNER */}
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-2">
              Your Property, Our Platform
            </h2>
            <p className="text-gray-300">
              List for Free & Attract Genuine Buyers <br />
              on <span className="font-semibold">Manraj Estate</span>
            </p>
          </div>

          <button
            onClick={() => navigate("/sell")}
            className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FaPlus />
            Add Property
            <span className="bg-white text-red-600 px-2 py-1 rounded text-sm">
              Free
            </span>
          </button>
        </div>

        {/* HEADING */}
        <div className="mb-10">
          <p className="text-red-600 font-semibold tracking-wide">
            EXPLORE PROPERTIES
          </p>
          <h2 className="text-3xl font-bold mt-1">
            Comfort Living <br /> Solution
          </h2>
        </div>

        {/* PROPERTY CARDS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* IMAGE → BUY PAGE */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover cursor-pointer"
                  onClick={() => navigate("/buy")}
                />
              )}

              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.location}
                </p>

                {item.price && (
                  <p className="text-red-600 font-bold mt-2">
                    ₹ {item.price}
                  </p>
                )}

                {/* VIEW DETAILS → BUY PAGE */}
                <button
                  onClick={() => navigate("/buy")}
                  className="mt-4 w-full border border-red-600 text-red-600 py-2 rounded-lg hover:bg-red-600 hover:text-white transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
