import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGlobe,
  FaUsers,
  FaTools,
  FaHandHoldingUsd,
  FaCertificate,
  FaBalanceScale,
  FaHandsHelping,
  FaLifeRing,
  FaHeart,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

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

const features = [
  {
    icon: <FaGlobe className="text-yellow-600 text-4xl mb-3" />,
    title: "Professional, Personalized Fundraising Pages",
    text: "Tell your story clearly and invite donors to give how they want.",
  },
  {
    icon: <FaUsers className="text-yellow-600 text-4xl mb-3" />,
    title: "Community Learning",
    text: "Join workshops, attend visits, and connect in our community.",
  },
  {
    icon: <FaTools className="text-yellow-600 text-4xl mb-3" />,
    title: "Powerful Tools",
    text: "Strengthen donor relationships with personalized thank-you notes.",
  },
  {
    icon: <FaHandHoldingUsd className="text-yellow-600 text-4xl mb-3" />,
    title: "Extra Funding",
    text: "Mobilize over $862M through campaigns and projects.",
  },
  {
    icon: <FaCertificate className="text-yellow-600 text-4xl mb-3" />,
    title: "Credibility & Visibility",
    text: "Gain trust through ratings, accreditations, and certifications.",
  },
  {
    icon: <FaBalanceScale className="text-yellow-600 text-4xl mb-3" />,
    title: "Tax Benefits",
    text: "Attract donors who benefit from tax deductions.",
  },
  {
    icon: <FaHandsHelping className="text-yellow-600 text-4xl mb-3" />,
    title: "Disaster Support",
    text: "Empowering communities in times of crisis.",
  },
  {
    icon: <FaLifeRing className="text-yellow-600 text-4xl mb-3" />,
    title: "Help When You Need It",
    text: "24/7 support worldwide.",
  },
  {
    icon: <FaHeart className="text-yellow-600 text-4xl mb-3" />,
    title: "Community Care",
    text: "Providing sustainable solutions for long-term growth.",
  },
];

const carouselImages = [
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

const Nonprofits = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "linear-gradient(135deg, #07A3B2, #D9ECC7)",
      }}
    >
      {/* Video Section */}
      <div className="relative flex justify-center items-center my-8">
        <video
          src="/Video5.mp4"
          controls
          style={{ width: "100%", height: "460px" }}
          className="rounded-lg object-cover"
        />
      </div>

     

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 mt-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          When your nonprofit partners with GlobalGiving, you get:
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.3 }}
        >
          {features.map((item, index) => (
            <Tilt
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-yellow-600 text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </Tilt>
          ))}
        </motion.div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Impact in Photos
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-4 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            &#8592;
          </button>
          <img
            src={carouselImages[currentIndex]}
            alt={`Carousel ${currentIndex}`}
            style={{ width: "800px", height: "450px", objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
          <button
            onClick={nextSlide}
            className="p-4 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Partnership Benefits Section */}

      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          When your nonprofit partners with Charlie Parker C. Global Foundation,
          you get:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold mb-2">
              Professional Fundraising Pages
            </h3>
            <p className="text-gray-600 text-sm">
              Showcase your mission with custom landing pages. Invite donors to
              contribute in their preferred way, whether once or monthly, using
              over 10 secure payment options.
            </p>
          </Tilt>

          {/* Card 2 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-green-500 text-4xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
            <p className="text-gray-600 text-sm">
              Join workshops, attend virtual partner visits, and connect within
              a dedicated community space. Access curated resources to help your
              nonprofit grow.
            </p>
          </Tilt>

          {/* Card 3 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-3">🛠️</div>
            <h3 className="text-xl font-semibold mb-2">Powerful Tools</h3>
            <p className="text-gray-600 text-sm">
              Strengthen donor engagement with tailored thank-you notes,
              impactful appeals, and detailed project reports highlighting your
              work.
            </p>
          </Tilt>

          {/* Card 4 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-red-500 text-4xl mb-3">💰</div>
            <h3 className="text-xl font-semibold mb-2">Extra Funding</h3>
            <p className="text-gray-600 text-sm">
              Since our founding, Charlie Parker C. Global Foundation has
              mobilized millions for change. Post projects and join curated
              campaigns to access extra funding.
            </p>
          </Tilt>

          {/* Card 5 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-purple-500 text-4xl mb-3">✔️</div>
            <h3 className="text-xl font-semibold mb-2">
              Credibility & Visibility
            </h3>
            <p className="text-gray-600 text-sm">
              Build trust and attract new donors. Our certifications and
              reputation help projects gain recognition and visibility globally.
            </p>
          </Tilt>

          {/* Card 6 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-teal-500 text-4xl mb-3">📜</div>
            <h3 className="text-xl font-semibold mb-2">Tax Benefits</h3>
            <p className="text-gray-600 text-sm">
              Enable donors in the US and UK to enjoy tax benefits when donating
              to your project — making their support even more valuable.
            </p>
          </Tilt>

          {/* Card 7 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-orange-500 text-4xl mb-3">🚨</div>
            <h3 className="text-xl font-semibold mb-2">Disaster Support</h3>
            <p className="text-gray-600 text-sm">
              We collaborate with thousands of local partners to ensure
              crisis-affected communities take charge of their own recovery.
            </p>
          </Tilt>

          {/* Card 8 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-indigo-500 text-4xl mb-3">🆘</div>
            <h3 className="text-xl font-semibold mb-2">
              Help When You Need It
            </h3>
            <p className="text-gray-600 text-sm">
              Our global teams are ready to assist nonprofits and donors
              wherever and whenever help is required.
            </p>
          </Tilt>

          {/* Card 9 */}
          <Tilt className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <div className="text-pink-500 text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-gray-600 text-sm">
              Gain access to our worldwide network of nonprofits and donors,
              enabling collaboration, shared resources, and greater impact.
            </p>
          </Tilt>
        </div>
      </div>

      {/* Closing Section */}
      {/* Closing Section */}
      <div className="max-w-4xl mx-auto my-16 p-8 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">
          We amplify every donation
        </h3>
        <p className="text-gray-700">
          Charlie Parker C. Global Foundation is a nonprofit organization.
          Joining is free — no application or subscription fees. We retain only
          a 5–12% nonprofit support fee plus a 3% processing fee. For every $1
          you contribute in fees, we raise an average of $2 more for you through
          marketing, campaigns, partnerships, and gift cards.
        </p>
      </div>

      
      {/* Donate Now Button */}
      <div className="text-center py-8">
        <Link
          to="/donate"
          className="inline-block px-8 py-4 bg-black text-white text-xl rounded hover:bg-red-600"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Nonprofits;
