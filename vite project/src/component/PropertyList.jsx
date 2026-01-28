import { useEffect, useState } from "react";
import axios from "axios";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/property/all");
        setProperties(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperties();
  }, []);

  return (
    <div className="px-6 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Available Properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div
            key={p._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`http://localhost:3000${p.image}`}   // 🔥 yahi main fix hai
              alt={p.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-600">📍 {p.location}</p>
              <p className="text-green-600 font-bold">₹ {p.price}</p>
              <p className="text-sm text-gray-500 mt-2">
                {p.description.slice(0, 80)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
