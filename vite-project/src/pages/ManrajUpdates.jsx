const updates = [
  {
    id: 1,
    category: "Investment",
    date: "Mar 26, 2026",
    title: "Top Locations to Invest in Abu Road",
    desc:
      "Explore the most promising real estate investment locations in Abu Road with long-term growth potential.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
  },
  {
    id: 2,
    category: "Home Improvement",
    date: "Mar 26, 2026",
    title: "How to Increase Your Property Value?",
    desc:
      "Smart renovation ideas and upgrades that significantly improve resale value in 2026.",
    image:
      "https://media.istockphoto.com/id/1383565855/photo/happy-mature-couple-meeting-investments-and-financial-advisor-at-home.jpg?s=2048x2048&w=is&k=20&c=pCfsp7TAJKHZACXnPtL10-DrwUUmBcuUjLWJ3fvp4oU=",
  },
  {
    id: 3,
    category: "Finance",
    date: "Mar 26, 2026",
    title: "Understanding Property Loans in 2026",
    desc:
      "A simple guide to modern home loans, interest rates, and financing options for buyers.",
    image:
      "https://media.istockphoto.com/id/1333938088/photo/stack-of-coins-and-house-on-table-the-concept-of-house-finance.jpg?s=612x612&w=0&k=20&c=nBiw5rTJcmip8ihESPZAgroffCWqWLsjw0PMHTX4Fro=",
  },
];

export default function ManrajUpdates() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-28">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-20">
          <p className="text-red-600 font-semibold tracking-[0.35em] text-sm">
            LATEST UPDATES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Our Most Recent Updates <br />
            and Expert Insights
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT FEATURED CARD */}
          <div className="group">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Luxury Home Abu Road"
                className="w-full h-[460px] object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="mt-8">
              <div className="flex gap-3 mb-4">
                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                  Luxury Homes
                </span>
                <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium">
                  Market Trends
                </span>
              </div>

              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                February 29, 2026
              </p>

              <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                Finding the Perfect Home in Abu Road
              </h3>

              <button className="mt-4 text-red-600 font-semibold hover:tracking-wide transition-all">
                Read Full Article →
              </button>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="space-y-8">
            {updates.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md flex gap-5 p-5 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-24 object-cover rounded-xl"
                />

                <div>
                  <span className="inline-block bg-slate-900 text-white text-xs px-3 py-1 rounded-full mb-1">
                    {item.category}
                  </span>

                  <p className="text-gray-400 text-sm">
                    {item.date}
                  </p>

                  <h4 className="font-semibold text-lg leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.desc}
                  </p>

                  <span className="inline-block mt-2 text-red-600 text-sm font-semibold">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
