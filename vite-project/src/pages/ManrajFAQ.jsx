import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Can real estate agents work with Manraj Estate?",
    answer:
      "Yes, real estate agents can collaborate with Manraj Estate. We welcome partnerships that help buyers and sellers find genuine properties with transparency.",
  },
  {
    question: "Will I receive spam calls after sharing my details?",
    answer:
      "No. We respect your privacy. Your contact details are shared only with relevant parties and are never sold to third parties.",
  },
  {
    question: "How does Manraj Estate ensure properties are genuine?",
    answer:
      "All properties listed on Manraj Estate go through a basic verification process including ownership checks and document validation.",
  },
  {
    question: "What types of properties can I buy through Manraj Estate?",
    answer:
      "You can buy residential houses, plots, villas, shops, agricultural land, and commercial properties through Manraj Estate.",
  },
];

export default function ManrajFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-600 max-w-md">
            Find answers to the most common questions about Manraj Estate,
            property listings, buying, selling, and our real estate services.
            If you need further assistance, feel free to contact us.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
