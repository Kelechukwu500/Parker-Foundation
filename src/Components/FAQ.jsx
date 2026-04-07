import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I know I can trust my donation to Charlie Parker C. Global Foundation?",
    answer: "We carefully vet every partner organization, provide transparent reports, and share updates about the impact of your donations so you know exactly where your support goes.",
  },
  {
    question: "Where does the money donated to your funds go?",
    answer: "Donations go directly to vetted nonprofit partners working with local communities to provide disaster relief and long-term recovery programs.",
  },
  {
    question: "What is Charlie Parker C. Global Foundation's history with disaster response?",
    answer: "Since 2021, we have responded to over 100 disasters in 10 countries, raising millions of dollars for locally led responses that build resilience in affected communities.",
  },
  {
    question: "What makes Charlie Parker C. Global Foundation different from other nonprofits?",
    answer: "Our focus on trust-based grantmaking, long-term partnerships, and transparency sets us apart, ensuring sustained impact rather than short-term aid.",
  },
  {
    question: "How long will it take for my money to get to disaster-affected areas?",
    answer: "We work quickly — funds reach vetted nonprofit partners within days to provide life-saving relief, with ongoing support over time.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-gray-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <span className="px-5 py-1.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg shadow text-sm mb-4">
            Help Center
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">{faq.question}</span>
                {openIndex === index
                  ? <FaChevronUp className="text-yellow-600 flex-shrink-0" />
                  : <FaChevronDown className="text-yellow-600 flex-shrink-0" />
                }
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;