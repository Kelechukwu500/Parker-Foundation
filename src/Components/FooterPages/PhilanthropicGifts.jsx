import React from "react";
import Neglect from "../../assets/Neglect.jpg"; // Replace with your image path
import { Link } from "react-router-dom"; 

const PhilanthropicGifts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Write Ups */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-blue-600">
            Philanthropic Gifts
          </h2>

          {/* Subheading */}
          <p className="text-lg italic text-gray-600">
            Your generosity can transform the lives of vulnerable children and
            communities.
          </p>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Charlie Parker C. Global Foundation</strong>,
            philanthropic gifts allow donors to support critical programs in
            education, health, protection, and community development. Each
            contribution is directed toward initiatives that create long-term,
            sustainable impact in the lives of children and families across
            Nigeria.
          </p>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-purple-600 mb-2">
                Education Support
              </h3>
              <p className="text-gray-600">
                Provide children with access to quality education, school
                supplies, and learning resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-green-500 mb-2">
                Health & Nutrition
              </h3>
              <p className="text-gray-600">
                Ensure children receive proper healthcare, nutritious meals, and
                wellness programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-yellow-500 mb-2">
                Child Protection
              </h3>
              <p className="text-gray-600">
                Support safe havens, trauma counseling, and protective
                interventions for at-risk children.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-lg text-pink-700 mb-2">
                Community Development
              </h3>
              <p className="text-gray-600">
                Empower families and communities through skill-building,
                infrastructure, and sustainable programs.
              </p>
            </div>
          </div>

          {/* Donate Button */}
          <div className="mt-8">
            <Link to="/donate">
            <button className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-600 transition">
              Donate Now
            </button>
            </Link>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-1/3 relative">
          <img
            src={Neglect}
            alt="Philanthropic Gifts"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PhilanthropicGifts;
