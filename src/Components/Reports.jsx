import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBook, FaUtensils, FaFirstAid } from "react-icons/fa";
import { Link } from "react-router-dom";

// IMAGE IMPORTS
import Photo10 from "../assets/Photo10.jpg";
import Photo15 from "../assets/Photo15.jpg";
import Photo16 from "../assets/Photo16.jpg";
import Photo17 from "../assets/Photo17.jpg";
import Photo19 from "../assets/Photo19.jpg";
import Photo20 from "../assets/Photo20.jpg";
import Photo21 from "../assets/Photo21.jpg";
import Photo22 from "../assets/Photo22.jpg";
import Photo23 from "../assets/Photo23.jpg";

const Report = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  /*** CONTROL PANEL FOR SIZES ***/
  const cardPadding = "p-4";
  const cardGap = "gap-3";
  const cardMaxWidth = "max-w-5xl";
  const headingSize = "text-xl";
  const paragraphSize = "text-sm";
  const imageHeight = "h-95";
  const imageWidth = "w-full";
  const imageShape = "rounded shadow";

  return (
    <div
      className={`p-4 min-h-screen bg-gray-300`}
      
    >
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Charlie Parker C. Global Foundation Reports
      </h1>

      <div ref={ref} className={`space-y-8 ${cardMaxWidth} mx-auto`}>
        {/* CARD 1 */}
        <motion.div
          className={`${cardPadding} border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-10`}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex items-center mb-3">
            <FaBook className="text-yellow-500 mr-2 text-2xl" />
            <h2 className={`${headingSize} font-semibold text-gray-700`}>
              Provided School Materials to Children
            </h2>
          </div>
          <p className={`${paragraphSize} text-black mb-3`}>
            Since its inception, the Charlie Parker C. Global Foundation has
            dedicated significant resources to ensuring children have the tools
            needed for academic success. This covers rural villages, urban
            slums, and refugee camps across Nigeria.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            Programs include distributing books, exercise notebooks, pencils,
            pens, uniforms, and other essential educational supplies.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            These materials not only enable children to learn effectively but
            also build confidence and motivation in their pursuit of education.
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-3 ${cardGap}`}>
            <img
              src={Photo10}
              alt="School Materials 1"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo15}
              alt="School Materials 2"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo16}
              alt="School Materials 3"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className={`${cardPadding} border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-10`}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex items-center mb-3">
            <FaUtensils className="text-red-500 mr-2 text-2xl" />
            <h2 className={`${headingSize} font-semibold text-gray-700`}>
              Food Supplies for the Less Privileged
            </h2>
          </div>
          <p className={`${paragraphSize} text-black mb-3`}>
            Hunger continues to be one of the most critical issues in
            marginalized communities. Our foundation implements sustainable food
            supply programs for immediate relief and long-term food security.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            Programs include daily meal distributions at community centers, food
            package deliveries to homes in need, and nutritional support
            initiatives targeting children and elderly populations.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            We partner with local farmers, suppliers, and volunteers to ensure
            consistency and sustainability.
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-3 ${cardGap}`}>
            <img
              src={Photo17}
              alt="Food Supplies 1"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo19}
              alt="Food Supplies 2"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo20}
              alt="Food Supplies 3"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
          </div>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className={`${cardPadding} border border-gray-300 rounded-lg shadow-md bg-white bg-opacity-10`}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex items-center mb-3">
            <FaFirstAid className="text-green-500 mr-2 text-2xl" />
            <h2 className={`${headingSize} font-semibold text-gray-700`}>
              Medical Aid and Health Support
            </h2>
          </div>
          <p className={`${paragraphSize} text-black mb-3`}>
            Access to healthcare remains a challenge in underserved communities.
            To address this, our foundation has launched medical outreach
            programs.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            Services include free health checkups, vaccination drives, the
            distribution of essential medicines, and medical awareness
            campaigns.
          </p>
          <p className={`${paragraphSize} text-black mb-3`}>
            Collaborations with local healthcare providers, NGOs, and volunteers
            ensure quality and reach.
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-3 ${cardGap}`}>
            <img
              src={Photo21}
              alt="Medical Aid 1"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo22}
              alt="Medical Aid 2"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
            <img
              src={Photo23}
              alt="Medical Aid 3"
              className={`${imageWidth} ${imageHeight} object-cover ${imageShape}`}
            />
          </div>
        </motion.div>
      </div>

      {/* DONATE NOW BUTTON */}
      <div className="flex justify-center mt-8">
        <Link to="/donate">
          <button className="bg-black-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Report;
