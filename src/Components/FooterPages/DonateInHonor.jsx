import React from "react";
import Justice1 from "../../assets/justice1.jpg"; // Replace with your image path
import { Link } from "react-router-dom"; 

const DonateInHonor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Write Ups */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-800">Donate in Honor</h2>

          {/* Subheading */}
          <p className="text-lg italic text-gray-600">
            Celebrate a loved one by making a meaningful contribution that
            transforms lives.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Charlie Parker C. Global Foundation</strong>, donating in
            honor is a powerful way to recognize someone special while
            supporting vulnerable children and families. Your gift can provide
            education, healthcare, protection, and other life-changing programs
            in the name of your honoree.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-purple-600 mb-2">
                Personalized Tribute
              </h3>
              <p className="text-gray-600">
                Dedicate a donation in honor of someone special, creating a
                meaningful connection through giving.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-green-500 mb-2">
                Custom Message
              </h3>
              <p className="text-gray-600">
                Include a personal message for your honoree, celebrating their
                impact in your life and the lives of children.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-yellow-500 mb-2">
                Impact Tracking
              </h3>
              <p className="text-gray-600">
                See how your gift in honor helps children and communities thrive
                with tangible results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-pink-700 mb-2">
                Recognition Options
              </h3>
              <p className="text-gray-600">
                Send an e-card or certificate to notify your honoree of your
                meaningful contribution.
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-8">
            <button className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-600 transition">
              Donate in Honor
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/3 relative">
          <img
            src={Justice1}
            alt="Donate in Honor"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DonateInHonor;
