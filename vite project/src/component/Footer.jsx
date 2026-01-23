import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Manraj Estate</h2>
          <p className="text-sm leading-relaxed">
            Your trusted partner for buying and selling properties in Abu Road and
            nearby areas. We ensure transparency, security, and best deals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/buy" className="hover:text-white">Buy</a></li>
            <li><a href="/sell" className="hover:text-white">Sell</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              Abu Road, District Sirohi, Rajasthan – 307026
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              +91 9602273282
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              manrajestate@gmail.com
            </p>
          </div>
        </div>

        {/* Social & Timing */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect With Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919602273282" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
              <FaWhatsapp />
            </a>
          </div>
          <p className="text-sm">
            🕘 Office Time: <br />
            <span className="text-white">Mon – Sun: 9:00 AM – 8:00 PM</span>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Manraj Estate. All Rights Reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Designed with ❤️ for a better real estate experience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
