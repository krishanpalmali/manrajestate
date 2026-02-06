import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-10">
      {/* ================= HEADING ================= */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-red-600 font-semibold tracking-widest mb-2">
          CONTACT US
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Get In Touch With <span className="text-red-600">Manraj Estate</span>
        </h2>
        <p className="text-gray-600 mt-4">
          We’re here to help you buy, sell, or invest in property with complete
          transparency and trust.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch">

        {/* ================= LEFT : CONTACT INFO ================= */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Manraj Estate – Abu Road Office
          </h3>

          <div className="space-y-6">
            {/* ADDRESS */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <FaMapMarkerAlt className="text-red-600 text-lg" />
              </div>
              <p className="text-gray-600 leading-relaxed">
                Abu Road, District Sirohi,<br />
                Rajasthan – 307026
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-full">
                <FaPhoneAlt className="text-green-600 text-lg" />
              </div>
              <a
                href="tel:+919602273282"
                className="text-gray-700 font-medium hover:text-green-600"
              >
                +91 96022 73282
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FaEnvelope className="text-blue-600 text-lg" />
              </div>
              <a
                href="mailto:manrajestate@gmail.com"
                className="text-gray-700 font-medium hover:text-blue-600"
              >
                manrajestate@gmail.com
              </a>
            </div>

            {/* TIMING */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <FaClock className="text-purple-600 text-lg" />
              </div>
              <p className="text-gray-600">
                Mon – Sun :
                <span className="font-semibold text-gray-800">
                  {" "}9:00 AM – 8:00 PM
                </span>
              </p>
            </div>
          </div>

          {/* NOTE */}
          <div className="mt-10 p-5 bg-gray-50 rounded-xl text-sm text-gray-600 leading-relaxed">
            📍 We specialize in residential homes, plots, commercial properties,
            and agricultural land across Abu Road and nearby regions.  
            <br />
            Our goal is to make every property deal safe, transparent, and
            profitable for our clients.
          </div>
        </div>

        {/* ================= RIGHT : MAP ================= */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <iframe
            title="Manraj Estate Abu Road Location"
            src="https://www.google.com/maps?q=Abu%20Road%20Rajasthan&output=embed"
            className="w-full h-full min-h-[420px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
