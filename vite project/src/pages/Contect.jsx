import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-white py-14 px-4 sm:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Visit our Abu Road office for trusted and professional real estate services.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side - Info Card */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Manraj Estate – Abu Road Office
          </h3>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <FaMapMarkerAlt className="text-red-600 text-lg" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                
                Abu Road, District Sirohi, Rajasthan – 307026
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FaPhoneAlt className="text-green-600 text-lg" />
              </div>
              <p className="text-gray-600 font-medium">
                +91 9602273282
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaEnvelope className="text-blue-600 text-lg" />
              </div>
              <p className="text-gray-600 font-medium">
                manrajestate@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <FaClock className="text-purple-600 text-lg" />
              </div>
              <p className="text-gray-600">
                Mon – Sun : <span className="font-semibold">9:00 AM – 8:00 PM</span>
              </p>
            </div>
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-500">
            📍 We specialize in residential plots, houses, commercial properties, 
            and agricultural land deals in Abu Road and nearby areas.
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            title="Manraj Estate Abu Road Location"
            src="https://www.google.com/maps?q=Abu%20Road%20Rajasthan&output=embed"
            width="100%"
            height="100%"
            className="min-h-[350px] w-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
