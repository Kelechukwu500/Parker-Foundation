import React, { useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaGlobe,
  FaEnvelope,
  FaQuoteLeft,
} from "react-icons/fa";
import { FaHandsHelping, FaUnlockAlt, FaSeedling } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FAQ from "../Components/FAQ.jsx";

import Photo30 from "../assets/Photo30.jpg";


//Carousel Photo Import//
import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";
import Photo3 from "../assets/Photo3.jpg";
import Photo4 from "../assets/Photo4.jpg";
import Photo5 from "../assets/Photo5.jpg";
import Photo6 from "../assets/Photo6.jpg";
import Photo7 from "../assets/Photo7.jpg";
import Photo8 from "../assets/Photo8.jpg";
import Photo9 from "../assets/Photo9.jpg";
import Photo10 from "../assets/Photo10.jpg";

const Disaster = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const images = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
    Photo10,
  ];


  const navLinks = [
    { text: "Our Approach", path: "/our-approach" },
    { text: "Donor Toolkit", path: "/donor-toolkit" },
    { text: "Latest Funds", path: "/latest-funds" },
    { text: "How It Works", path: "/how-it-works" },
    { text: "Our Philosophy", path: "/our-philosophy" },
    { text: "Impact Stories", path: "/impact-stories" },
    { text: "In the Media", path: "/in-the-media" },
    { text: "FAQs", path: "/faqs" },
  ];

  const howItWorks = [
    {
      icon: <FaCalendarAlt className="text-yellow-600 text-4xl mb-3" />,
      step: "1",
      text: "We engage our network and carry out research to understand the scale of crises and their effects on communities.",
    },
    {
      icon: <FaGlobe className="text-yellow-600 text-4xl mb-3" />,
      step: "2",
      text: "We set up a GlobalGiving fund, raising money from donors who want a fast, safe, and reliable way to make an impact.",
    },
    {
      icon: <FaEnvelope className="text-yellow-600 text-4xl mb-3" />,
      step: "3",
      text: "Businesses seeking to help turn to our foundation for guidance and effective grantmaking support.",
    },
    {
      icon: <FaCalendarAlt className="text-yellow-600 text-4xl mb-3" />,
      step: "4",
      text: "Within days, we channel funds to trusted nonprofit partners providing life-saving aid—this marks only the beginning of our assistance.",
    },
    {
      icon: <FaGlobe className="text-yellow-600 text-4xl mb-3" />,
      step: "5",
      text: "Our support continues for years, working with community leaders to address evolving and diverse recovery needs.",
    },
    {
      icon: <FaEnvelope className="text-yellow-600 text-4xl mb-3" />,
      step: "6",
      text: "Communities build long-term resilience while donors receive updates on the sustained impact of their contributions.",
    },
  ];

  return (
    <div
      className="w-full overflow-x-hidden"
      style={{ background: "linear-gradient(135deg, #07A3B2, #D9ECC7)" }}
    >
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 w-full">
        {/* Left Card */}
        <div className="bg-[#A73C2C] text-white flex flex-col justify-center p-10">
          <h2 className="uppercase font-bold text-sm tracking-wide">
            Disaster Response
          </h2>
          <h1 className="text-4xl font-bold mb-4">Our Approach</h1>
          <p className="mb-2 leading-relaxed">
            Since 2021, Charlie Parker C. Global Foundation has been shifting
            decision-making power to crisis-affected communities. We achieve
            this through trust-based grantmaking and support for local leaders.
            Our approach ensures that aid reaches the right people quickly and
            effectively. This creates lasting impact in communities affected by
            disasters worldwide.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={Photo30}
            alt="Disaster"
            className="w-full h-[450px] object-cover"
          />
        </div>
      </div>

      {/* Clickable Navigation Section */}
      <div className="flex flex-wrap justify-center bg-[#A73C2C] text-white py-3">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="mx-3 font-semibold hover:text-yellow-400 transition cursor-pointer"
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Help Communities Recover */}
      <div className="text-center py-10 px-6">
        <h2 className="text-3xl font-bold mb-4">Help Communities Recover</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Charlie Parker C. Global Foundation makes it easy, quick, and safe to
          support local communities in the aftermath of disasters and
          humanitarian crises. Learn more about how you can help people in need
          right now.
        </p>
      </div>

      {/* Disaster Photo Carousel Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Disaster Response in Action
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-gray-700">
          These photos showcase disaster locations, rescue operations, and
          relief distribution by our teams. Every image tells the story of
          resilience and support in action.
        </p>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() =>
              setCarouselIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
            className="absolute left-0 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Carousel Images */}
          <div className="flex overflow-hidden w-full">
            {images.slice(carouselIndex, carouselIndex + 3).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Disaster ${carouselIndex + idx + 1}`}
                className="w-1/3 object-cover mx-1 rounded-lg shadow-lg"
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setCarouselIndex((prev) =>
                prev === images.length - 3 ? 0 : prev + 1
              )
            }
            className="absolute right-0 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Button */}
      <div className="text-center py-6">
        <Link
          to="/disaster-funds"
          className="px-6 py-3 bg-rose-400 text-black font-semibold rounded-lg shadow-lg hover:bg-black-700 transition inline-block"
        >
          SEE ALL DISASTER FUNDS
        </Link>
      </div>

      {/* Our Approach Write-Up Section */}
      <div className="bg-gray-200 text-black py-8 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
        <p className="max-w-4xl mx-auto leading-relaxed">
          Since 2021, <strong>Charlie Parker C. Global Foundation</strong> has
          responded to over 1,000 crises across 175+ countries, raising
          substantial funds to empower communities often overlooked and
          underfunded. We stand apart by shifting power to local leaders,
          removing barriers to equitable recovery, fostering trust, and
          providing long-term support — ensuring communities are stronger and
          better prepared for future challenges.
        </p>
      </div>

      {/* 🎥 Video Placeholder Section */}
      <div className="max-w-6xl mx-auto py-12 px-6 flex justify-center">
        <div className="relative w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
          <video
            src="/Video2.mp4"
            controls
            className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-between items-center">
            <p className="text-white text-sm">Disaster Recovery Video</p>
            <p className="text-white text-sm">▶️ Play</p>
          </div>
        </div>
      </div>

      {/* Hover Animation Cards Section */}
      {/* Hover Animation Cards Section */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-3 gap-4 perspective-[1000px] relative">
          {[
            {
              title: "Empowering Local Leaders",
              text: "We work directly with local leaders to ensure aid is relevant, timely, and effective for their communities.",
              icon: (
                <FaHandsHelping size={40} className="text-yellow-500 mb-4" />
              ),
            },
            {
              title: "Removing Barriers",
              text: "Our foundation removes obstacles to recovery, making sure every community gets the support they need without delay.",
              icon: <FaUnlockAlt size={40} className="text-yellow-500 mb-4" />,
            },
            {
              title: "Long-Term Support",
              text: "We build sustainable recovery by providing continuous aid and guidance, helping communities prepare for future crises.",
              icon: <FaSeedling size={40} className="text-yellow-500 mb-4" />,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.05,
                rotateY: 8,
                rotateX: 4,
                z: 20,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              animate={{
                x:
                  hoveredIndex === null
                    ? 0
                    : index === hoveredIndex
                    ? -15
                    : index < hoveredIndex
                    ? -30
                    : 30,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer hover:shadow-2xl transform"
            >
              {card.icon}
              <h3 className="text-2xl font-bold mb-4 text-black">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ How It Works Section */}
      <div className="py-12 px-6 bg-white">
        {/* Heading above cards */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-4 text-black">How It Works</h2>
          <p className="text-black">
            We partner with thousands of locally led organizations around the
            world to put crisis-affected communities in the driver's seat of
            recovery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, idx) => (
            <motion.div
              key={idx}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-100 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              {item.icon}
              <h3 className="text-xl font-bold mb-2 text-black">
                Step {item.step}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* Donate Now + Help Center Buttons */}
      <div className="text-center py-12 space-x-4">
        <Link
          to="/donate"
          className="px-8 py-4 bg-gray-600 text-white font-bold rounded-lg shadow-lg hover:bg-yellow-700 transition inline-block"
        >
          Donate Now
        </Link>

        
      </div>
    </div>
  );
};

export default Disaster;
