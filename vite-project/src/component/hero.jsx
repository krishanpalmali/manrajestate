import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo121.png";

/* Desktop Images */
const desktopImages = [
  "https://media.istockphoto.com/id/1560030215/photo/happy-young-indian-couple-showing-new-home-keys-by-looking-at-camera-home-concept-of-new.jpg?s=2048x2048&w=is&k=20&c=t8c-AnuV3dbkgFG0GxxwtxG2TgVZlerqVwavfMGfJ1Q=",
  "https://media.istockphoto.com/id/2149359397/photo/financial-advisor-stock-photo.jpg?s=2048x2048&w=is&k=20&c=0JHyIw6CIwA2RuTUWxeqGZYBS2X4ZkL2vHCY_eGe5wk=",
  "https://media.istockphoto.com/id/1577689235/photo/happy-young-indian-parents-and-kids-wearing-casual-cloths-holding-house-sitting-together-on.jpg?s=2048x2048&w=is&k=20&c=ECGU60zNZdUNXa9sj8HGNp0N_L4vIsWj0zxpXI2lODU="
];

/* Mobile Images */
const mobileImages = [
  "https://media.istockphoto.com/id/2057413306/photo/happy-indian-family-of-three-doing-grah-pravesh-ritual-or-entering-new-house-for-the-first.jpg?s=2048x2048&w=is&k=20&c=EDCr2SjIHL-dqDOLr-NSia28pIjnjYvu4fBIgFTQXCo=",
  "https://media.istockphoto.com/id/2245928186/photo/happy-indian-farmer-with-wife-making-home-shape-with-hand-dream-home-concept.jpg?s=2048x2048&w=is&k=20&c=8wKEqaRuYAcsNO7jsDX94HZiD0I1a6nuQ71ohaaBGSI=",
  "https://media.istockphoto.com/id/2126770345/photo/happy-parents-with-son-standing-at-construction-site.jpg?s=2048x2048&w=is&k=20&c=Eg-czEKuTmojpozbKs-MEZmLBHii20mJmJ-DZHItCdw="
];

const Hero = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        key={current}
        className="absolute inset-0 bg-cover bg-center scale-105 animate-heroZoom"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 md:px-20 pt-32 sm:pt-40 text-white">
        
        {/* LOGO – no bg, hover highlight */}
        <div className="mb-6 flex justify-center sm:justify-start">
          <div
            className="
              px-5 py-3 rounded-2xl
              animate-slideFade
              transition-all duration-300
              hover:bg-white/90
              hover:backdrop-blur-md
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              hover:scale-105
            "
          >
            <img
              src={logo}
              alt="Manraj Estate Logo"
              className="h-12 sm:h-20 w-auto object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-[11px] sm:text-sm mb-3 tracking-wide text-gray-200 animate-fadeUp delay-100">
          ✔ Verified Properties • ✔ Legal Support • ✔ 100% Transparency • ✔ Trusted by 500+ Clients
        </p>

        <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fadeUp delay-200">
          Buy & Sell Property <br />
          <span className="text-emerald-400">with Complete Trust</span>
        </h1>

        <p className="mt-4 text-xs sm:text-base text-gray-200 max-w-xl animate-fadeUp delay-300">
          From dream homes to agricultural land, plots, shops, and commercial
          spaces — <span className="font-semibold text-white">Manraj Estate</span>{" "}
          ensures safe, transparent, and profitable real estate deals.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 animate-fadeUp delay-400">
          <button
            onClick={() => navigate("/buy")}
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            Find Property
          </button>

          <button
            onClick={() => navigate("/sell")}
            className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black hover:scale-105 transition"
          >
            List Your Property
          </button>
        </div>

        <p className="mt-4 text-[10px] sm:text-xs text-gray-300 animate-fadeUp delay-500">
          🔒 Your information is safe with us. We respect your privacy.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .animate-heroZoom {
          animation: heroZoom 6s ease-out forwards;
        }

        @keyframes slideFade {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideFade {
          animation: slideFade 1s ease-out forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s }
        .delay-200 { animation-delay: 0.2s }
        .delay-300 { animation-delay: 0.3s }
        .delay-400 { animation-delay: 0.4s }
        .delay-500 { animation-delay: 0.5s }
      `}</style>
    </section>
  );
};

export default Hero;
