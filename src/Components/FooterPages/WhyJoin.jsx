import React from "react";
import Champion from "../../assets/champion.jpg"; // Replace with your image path
import { Link } from "react-router-dom";

const WhyJoin = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Write Ups */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-500">Why Join Us</h2>

          {/* Subheading */}
          <p className="text-lg italic text-gray-600">
            Be part of a movement that transforms lives and empowers
            communities.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            Joining <strong>Charlie Parker C. Global Foundation</strong> means
            making a real difference in the lives of vulnerable children and
            families across Nigeria. Whether you volunteer, donate, or
            participate in our programs, your involvement fuels positive change
            and creates lasting impact.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Make a Tangible Impact
              </h3>
              <p className="text-gray-600">
                Directly improve the lives of children and communities through
                your contributions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Be Part of a Caring Community
              </h3>
              <p className="text-gray-600">
                Connect with like-minded individuals committed to making a
                difference.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Skill Development & Learning
              </h3>
              <p className="text-gray-600">
                Gain valuable experience and learn new skills through
                volunteering and program involvement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Transparency & Accountability
              </h3>
              <p className="text-gray-600">
                See exactly how your time, effort, or contribution is making a
                meaningful difference.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Recognition & Gratitude
              </h3>
              <p className="text-gray-600">
                Receive acknowledgment for your efforts and know your
                contribution matters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Lifelong Impact
              </h3>
              <p className="text-gray-600">
                Your support leaves a lasting mark, creating opportunities and
                hope for generations to come.
              </p>
            </div>
          </div>

          {/* Join Button */}
          <div className="mt-8">
            <Link to="/start-an-application">
              <button className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-600 transition">
                Join Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/3 relative">
          <img
            src={Champion}
            alt="Why Join Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
