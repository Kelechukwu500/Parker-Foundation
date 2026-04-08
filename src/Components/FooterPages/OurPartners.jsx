// OurPartners.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

// Import your company logos here
import ParkerLogo from "../../assets/ParkerLogo.jpg";


const partners = [
  {
    name: "Parkersen Group",
    logo: ParkerLogo,
    website: "https://parkersen-group.onrender.com/",
  },

  // Add more partners as needed
];

const OurPartners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Corporate Partners
          </h2>
          <p className="mt-4 text-gray-700 italic text-lg">
            We collaborate with forward-thinking companies to create lasting
            impact
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-32 h-auto object-contain"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="/become-partner"
            className="inline-block px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
