import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        hero-bg
        min-h-screen sm:min-h-[110vh] w-full
        bg-no-repeat bg-cover
        relative overflow-hidden
        pt-20 sm:pt-24
        pb-40 sm:pb-56
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 animate-fadeIn"></div>

      {/* Logo */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 animate-slideDown">
        <img
          src={logo}
          alt="Manraj Estate Logo"
          className="h-10 sm:h-16 w-auto bg-white p-1 rounded-md"
        />
        <h2 className="text-white font-bold text-base sm:text-xl">
          Manraj Estate
        </h2>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-12 md:px-20 max-w-3xl text-white">
        <p className="text-[11px] sm:text-sm mb-3 tracking-wide text-gray-200 animate-fadeUp delay-100">
          ✔ Verified Properties • ✔ Legal Support • ✔ 100% Transparency • ✔ Trusted by 500+ Clients
        </p>

        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fadeUp delay-200">
          Buy & Sell Property with Complete Trust
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-200 max-w-xl animate-fadeUp delay-300">
          From dream homes to agricultural land, plots, shops, and commercial
          spaces –{" "}
          <span className="font-semibold text-white">Manraj Estate</span> is your
          reliable partner for safe, transparent, and profitable real estate
          deals.
        </p>

        <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 animate-fadeUp delay-400">
          <button
            onClick={() => navigate("/buy")}
            className="
              bg-white text-black px-4 py-2 sm:px-6 sm:py-3
              rounded-full font-semibold
              hover:bg-gray-200 hover:scale-105
              transition-transform duration-300
              text-sm sm:text-base
            "
          >
            Find Property
          </button>
          <button
            onClick={() => navigate("/sell")}
            className="
              border border-white text-white px-4 py-2 sm:px-6 sm:py-3
              rounded-full font-semibold
              hover:bg-white hover:text-black hover:scale-105
              transition-transform duration-300
              text-sm sm:text-base
            "
          >
            List Your Property
          </button>
        </div>

        <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-300 animate-fadeUp delay-500">
          🔒 Your information is safe with us. We respect your privacy.
        </p>
      </div>

      {/* CSS for responsive images */}
      <style>
        {`
          .hero-bg {
            background-position: center top;
            background-image: url("https://media.istockphoto.com/id/1337281115/photo/nothing-says-we-made-it-like-buying-a-new-home.jpg?s=2048x2048&w=is&k=20&c=mD96ALTxi2pWueGlWNv1Seb8gsyJ0uHTU-nUfMNw1Vc="); /* mobile image */
          }

          @media (min-width: 640px) {
            .hero-bg {
              background-position: center;
              background-image: url("https://media.istockphoto.com/id/184910243/photo/cute-young-couple-and-child-with-beautiful-home.jpg?s=2048x2048&w=is&k=20&c=OU9xE6tccy-oS-NJdNvRq87tN9YuRwr1DMx-k-g8BRM=");
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
