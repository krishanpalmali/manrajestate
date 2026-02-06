import { useEffect, useRef, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const sliderRef = useRef(null);

  /* FETCH PROPERTIES */
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/property/all", {
          withCredentials: true,
        });
        setProperties(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };
    fetchProperties();
  }, []);

  /* AUTO SLIDE */
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || properties.length === 0) return;

    const interval = setInterval(() => {
      slider.scrollBy({
        left: 320,
        behavior: "smooth",
      });

      // loop back
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [properties]);

  const toggleReadMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  if (properties.length === 0) return null;

  return (
    <div className="px-6 py-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Available Properties
      </h2>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide max-w-7xl mx-auto"
      >
        {properties.map((p) => (
          <div
            key={p._id}
            className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* IMAGE */}
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">📍 {p.location}</p>
              <p className="text-green-600 font-bold">₹ {p.price}</p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-2">
                {expanded === p._id
                  ? p.description
                  : `${p.description.slice(0, 80)}...`}
              </p>

              <button
                onClick={() => toggleReadMore(p._id)}
                className="mt-2 text-indigo-600 font-semibold hover:underline"
              >
                {expanded === p._id ? "Read Less ↑" : "Read More →"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
