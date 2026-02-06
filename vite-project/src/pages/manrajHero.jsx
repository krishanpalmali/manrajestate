import { FaHome, FaBuilding, FaStore, FaWarehouse, FaPhoneAlt } from "react-icons/fa";

const propertyTypes = [
  { name: "Apartment", count: "6+", icon: <FaBuilding /> },
  { name: "Residential Plot", count: "8+", icon: <FaHome /> },
  { name: "Retail Shop", count: "5+", icon: <FaStore /> },
  { name: "Villa / Bungalow", count: "4+", icon: <FaHome /> },
  { name: "Commercial Space", count: "6+", icon: <FaBuilding /> },
  { name: "Warehouse / Godown", count: "3+", icon: <FaWarehouse /> },
];

export default function ManrajHero() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* PROPERTY TYPES */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold tracking-wider">
            NEWLY LISTED
          </p>
          <h2 className="text-3xl font-bold mt-2">
            Search By Property Requirement
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
            {propertyTypes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow hover:shadow-lg transition cursor-pointer hover:border-red-500 border"
              >
                <div className="text-red-600 text-2xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.count} Properties</p>
              </div>
            ))}
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-red-600 font-semibold mb-2">
              ABU ROAD PROPERTIES
            </p>
            <h1 className="text-4xl font-bold leading-tight mb-4">
              Find Your Dream Property with <br />
              <span className="text-red-600">Manraj Estate</span>
            </h1>

            <p className="text-gray-600 mb-6">
              Manraj Estate specializes in buying, selling, and renting verified
              residential and commercial properties in Abu Road and nearby
              areas. We ensure transparent deals, genuine listings, and complete
              customer satisfaction.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
                Explore Properties
              </button>

              <div className="flex items-center gap-3">
                <div className="bg-black text-white p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us Anytime</p>
                  <p className="font-semibold">+91 9XXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Manraj Estate Property"
              className="rounded-xl shadow-lg"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm">
              Trusted Properties
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
