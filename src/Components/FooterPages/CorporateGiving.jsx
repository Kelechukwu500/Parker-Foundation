// CorporateGiving.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

// Example corporate giving options
const givingOptions = [
  {
    title: "Bronze Tier",
    description: "Support one student’s education for a year.",
    link: "/bronze-tier",
    actionText: "Learn More",
  },
  {
    title: "Silver Tier",
    description: "Fund a community project or mentorship program.",
    link: "/silver-tier",
    actionText: "Learn More",
  },
  {
    title: "Gold Tier",
    description:
      "Partner for multiple initiatives and employee engagement programs.",
    link: "/gold-tier",
    actionText: "Learn More",
  },
  {
    title: "Platinum Tier",
    description:
      "Comprehensive partnership including sponsorships, events, and brand visibility.",
    link: "/platinum-tier",
    actionText: "Learn More",
  },
];

const CorporateGiving = () => {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600">Corporate Giving</h2>
          <p className="mt-4 text-gray-700 italic text-lg">
            Partner with us to create lasting impact and drive meaningful
            change.
          </p>
        </motion.div>

        {/* Overview / Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 max-w-3xl mx-auto text-gray-700"
        >
          <p>
            Companies can contribute to Charlie Parker C. Global Foundation
            through financial donations, employee volunteering, and in-kind
            support. Your partnership helps us empower students, support
            communities, and expand programs that create meaningful impact.
          </p>
        </motion.div>

        {/* Giving Options / Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
        >
          {givingOptions.map((option, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {option.title}
              </h3>
              <p className="mt-2 text-gray-700">{option.description}</p>
              <a
                href={option.link}
                className="mt-4 inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition text-center"
              >
                {option.actionText}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="/corporate-partnership"
            className="inline-block px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Become a Corporate Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CorporateGiving;
