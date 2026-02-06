import { useEffect, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Ramesh Kumar",
    place: "Abu Road",
    message:
      "Manraj Estate helped me find the perfect residential plot. Very transparent process and genuine guidance.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Sharma",
    place: "Sirohi",
    message:
      "I sold my property through Manraj Estate and got the best deal. Highly professional and trustworthy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Jain",
    place: "Mount Abu",
    message:
      "Best real estate consultant in Abu Road. Smooth documentation and honest advice.",
    rating: 4,
  },
];

const FeedbackSlider = () => {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? feedbacks.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % feedbacks.length);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-28 px-4">
      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <p className="text-red-600 font-semibold tracking-[0.3em] mb-3">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Trusted by Clients of{" "}
          <span className="text-red-600">Manraj Estate</span>
        </h2>

        {/* SLIDER CARD */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2.5rem] shadow-2xl px-10 md:px-16 py-16 transition-all">

          {/* QUOTE ICON */}
          <FaQuoteLeft className="text-red-100 text-6xl mb-8 mx-auto" />

          {/* MESSAGE */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            “{feedbacks[index].message}”
          </p>

          {/* STARS */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: feedbacks[index].rating }).map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-lg" />
            ))}
          </div>

          {/* NAME */}
          <h4 className="font-semibold text-gray-900 text-lg">
            {feedbacks[index].name}
          </h4>
          <p className="text-sm text-gray-500 mb-10">
            {feedbacks[index].place}
          </p>

          {/* CONTROLS */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaChevronLeft />
            </button>
          </div>

          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-8">
            {feedbacks.map((_, i) => (
              <span
                key={i}
                onClick={() => setIndex(i)}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${
                  i === index
                    ? "bg-red-600 scale-125"
                    : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSlider;
